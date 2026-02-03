import type { Topic } from "../../../types";

export const angularRxJSTopic: Topic = {
  id: "angular-rxjs",
  name: "RxJS & Observables",
  questions: [
    {
      id: "q1",
      question: "What are Observables in Angular?",
      answer:
        "Observables are lazy collections of multiple values over time. They're part of RxJS library. Unlike Promises (single value), Observables can emit multiple values, can be cancelled, and support operators for transformation. Angular uses them extensively for HTTP, routing, forms, and events.",
      codeSnippets: [
        {
          language: "typescript",
          code: `import { Observable, of, from } from 'rxjs';

// Creating Observables
const observable1 = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
});

// Using 'of' operator
const observable2 = of(1, 2, 3);

// From array
const observable3 = from([1, 2, 3]);

// Subscribing to Observable
observable1.subscribe({
  next: (value) => console.log('Received:', value),
  error: (err) => console.error('Error:', err),
  complete: () => console.log('Completed')
});

// Observable vs Promise
const promise = new Promise((resolve) => {
  resolve('one value');  // Single value
});

const observable = new Observable(subscriber => {
  subscriber.next('value 1');
  subscriber.next('value 2');  // Multiple values
  subscriber.next('value 3');
});

// Observables are lazy (only execute when subscribed)
const lazy = new Observable(subscriber => {
  console.log('Observable executed!');
  subscriber.next(Math.random());
});

// Nothing happens here
const obs = lazy;

// Executes now
obs.subscribe(val => console.log('First:', val));
obs.subscribe(val => console.log('Second:', val));  // Different value`,
        },
      ],
    },
    {
      id: "q2",
      question: "What are common RxJS operators and how do you use them?",
      answer:
        "RxJS operators transform, filter, or combine Observables. Common operators: map (transform values), filter (conditional emission), tap (side effects), switchMap (switch to new observable), mergeMap, concatMap, catchError (error handling), debounceTime (delay), take (limit emissions).",
      codeSnippets: [
        {
          language: "typescript",
          code: `import { Component, OnInit } from '@angular/core';
import { Observable, of, interval, fromEvent } from 'rxjs';
import { 
  map, filter, tap, take, debounceTime, 
  switchMap, catchError, distinctUntilChanged 
} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-demo',
  template: \`
    <input #searchInput type="text" placeholder="Search...">
    <div *ngFor="let result of searchResults">{{ result }}</div>
  \`
})
export class RxjsDemoComponent implements OnInit {
  searchResults: string[] = [];

  ngOnInit() {
    // 1. map - transform values
    of(1, 2, 3).pipe(
      map(x => x * 10)
    ).subscribe(val => console.log('Mapped:', val));
    // Output: 10, 20, 30

    // 2. filter - emit only certain values
    of(1, 2, 3, 4, 5).pipe(
      filter(x => x % 2 === 0)
    ).subscribe(val => console.log('Filtered:', val));
    // Output: 2, 4

    // 3. tap - side effects (logging, debugging)
    of(1, 2, 3).pipe(
      tap(x => console.log('Before map:', x)),
      map(x => x * 10),
      tap(x => console.log('After map:', x))
    ).subscribe();

    // 4. take - limit emissions
    interval(1000).pipe(
      take(5)
    ).subscribe(val => console.log('Interval:', val));
    // Emits 0, 1, 2, 3, 4 then completes

    // 5. debounceTime - delay emissions
    fromEvent(document.getElementById('searchInput')!, 'input').pipe(
      debounceTime(500),  // Wait 500ms after last keystroke
      map((event: any) => event.target.value),
      distinctUntilChanged()  // Only if value changed
    ).subscribe(value => console.log('Search:', value));

    // 6. switchMap - switch to new observable (cancel previous)
    // Useful for search/autocomplete
    this.search('angular');
  }

  search(term: string): void {
    of(term).pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(searchTerm => this.performSearch(searchTerm)),
      catchError(error => {
        console.error('Search error:', error);
        return of([]);  // Return empty array on error
      })
    ).subscribe(results => {
      this.searchResults = results;
    });
  }

  performSearch(term: string): Observable<string[]> {
    // Simulated API call
    return of(['Result 1', 'Result 2', 'Result 3']);
  }
}

// More operator examples
export class MoreOperators {
  example1() {
    // mergeMap - process all emissions in parallel
    of('user1', 'user2').pipe(
      mergeMap(userId => this.fetchUser(userId))
    ).subscribe(user => console.log('User:', user));
  }

  example2() {
    // concatMap - process emissions in order (wait for previous)
    of('user1', 'user2').pipe(
      concatMap(userId => this.fetchUser(userId))
    ).subscribe(user => console.log('User:', user));
  }

  fetchUser(id: string): Observable<any> {
    return of({ id, name: \`User \${id}\` });
  }
}`,
        },
      ],
    },
    {
      id: "q3",
      question: "What is the difference between Subject, BehaviorSubject, and ReplaySubject?",
      answer:
        "Subject is an Observable that can multicast to multiple observers. BehaviorSubject requires initial value and emits current value to new subscribers. ReplaySubject replays specified number of emissions to new subscribers. AsyncSubject emits only last value on completion.",
      codeSnippets: [
        {
          language: "typescript",
          code: `import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

// 1. Subject - no initial value, late subscribers miss previous emissions
const subject = new Subject<number>();

subject.subscribe(val => console.log('Sub 1:', val));
subject.next(1);  // Sub 1: 1
subject.next(2);  // Sub 1: 2

subject.subscribe(val => console.log('Sub 2:', val));
// Sub 2 doesn't receive 1 or 2
subject.next(3);  // Sub 1: 3, Sub 2: 3

// 2. BehaviorSubject - has initial value, emits current value to new subscribers
const behavior = new BehaviorSubject<number>(0);  // Initial value

behavior.subscribe(val => console.log('Behavior 1:', val));  // 0
behavior.next(1);  // 1
behavior.next(2);  // 2

behavior.subscribe(val => console.log('Behavior 2:', val));  // 2 (current)
behavior.next(3);  // Both get 3

console.log('Current value:', behavior.value);  // Can access current value

// 3. ReplaySubject - replays N previous emissions to new subscribers
const replay = new ReplaySubject<number>(2);  // Buffer size: 2

replay.next(1);
replay.next(2);
replay.next(3);

replay.subscribe(val => console.log('Replay 1:', val));
// Outputs: 2, 3 (last 2 values)

replay.next(4);  // 4

replay.subscribe(val => console.log('Replay 2:', val));
// Outputs: 3, 4 (last 2 values)

// 4. AsyncSubject - emits only last value when completed
const async = new AsyncSubject<number>();

async.subscribe(val => console.log('Async:', val));
async.next(1);
async.next(2);
async.next(3);
// No output yet

async.complete();  // Now outputs: 3 (only last value)

// Practical use case: Shared data service
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {
  // BehaviorSubject for current user
  private currentUserSubject = new BehaviorSubject<any>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  // Subject for notifications
  private notificationSubject = new Subject<string>();
  notifications$ = this.notificationSubject.asObservable();

  setUser(user: any) {
    this.currentUserSubject.next(user);
  }

  getCurrentUser() {
    return this.currentUserSubject.value;  // Synchronous access
  }

  sendNotification(message: string) {
    this.notificationSubject.next(message);
  }
}

// Component usage
@Component({
  selector: 'app-user-profile',
  template: '<h1>{{ (currentUser$ | async)?.name }}</h1>'
})
export class UserProfileComponent implements OnInit {
  currentUser$: Observable<any>;

  constructor(private dataService: DataService) {
    this.currentUser$ = this.dataService.currentUser$;
  }

  ngOnInit() {
    // Immediately receives current user (if any)
    this.currentUser$.subscribe(user => {
      console.log('Current user:', user);
    });
  }
}`,
        },
      ],
    },
    {
      id: "q4",
      question: "What is the async pipe and why should you use it?",
      answer:
        "The async pipe subscribes to Observables/Promises in templates and automatically unsubscribes on component destruction. It prevents memory leaks, reduces boilerplate, and handles subscription lifecycle automatically. Returns the latest emitted value.",
      codeSnippets: [
        {
          language: "typescript",
          code: `import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

// Without async pipe (BAD - manual subscription management)
@Component({
  selector: 'app-without-async',
  template: \`
    <h2>Users</h2>
    <div *ngFor="let user of users">{{ user.name }}</div>
  \`
})
export class WithoutAsyncComponent implements OnInit, OnDestroy {
  users: any[] = [];
  private subscription: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    // Must manually subscribe
    this.subscription = this.userService.getUsers().subscribe(
      users => this.users = users
    );
  }

  ngOnDestroy() {
    // Must manually unsubscribe to prevent memory leak
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

// With async pipe (GOOD - automatic subscription management)
@Component({
  selector: 'app-with-async',
  template: \`
    <h2>Users</h2>
    
    <!-- Observable with async pipe -->
    <div *ngFor="let user of users$ | async">
      {{ user.name }}
    </div>

    <!-- Loading state -->
    <div *ngIf="(users$ | async) === null">Loading...</div>

    <!-- Using as syntax for single subscription -->
    <div *ngIf="users$ | async as users">
      <p>Total: {{ users.length }}</p>
      <div *ngFor="let user of users">{{ user.name }}</div>
    </div>

    <!-- Multiple async pipes (creates multiple subscriptions) -->
    <p>Count: {{ (users$ | async)?.length }}</p>
    <div *ngFor="let user of users$ | async">...</div>
  \`
})
export class WithAsyncComponent implements OnInit {
  users$!: Observable<any[]>;
  // No OnDestroy needed!

  constructor(private userService: UserService) { }

  ngOnInit() {
    // Just assign the Observable
    this.users$ = this.userService.getUsers();
    // async pipe handles subscribe/unsubscribe automatically
  }
}

// Better pattern: single subscription with 'as'
@Component({
  selector: 'app-optimized',
  template: \`
    <ng-container *ngIf="data$ | async as data">
      <h2>{{ data.title }}</h2>
      <p>{{ data.description }}</p>
      <ul>
        <li *ngFor="let item of data.items">{{ item }}</li>
      </ul>
    </ng-container>
  \`
})
export class OptimizedComponent {
  data$: Observable<any>;

  constructor(private dataService: DataService) {
    this.data$ = this.dataService.getData();
  }
}

// Async pipe with loading and error states
@Component({
  selector: 'app-advanced',
  template: \`
    <div [ngSwitch]="(users$ | async)">
      <div *ngSwitchCase="null">Loading...</div>
      <div *ngSwitchCase="[]">No users found</div>
      <div *ngSwitchDefault>
        <div *ngFor="let user of users$ | async">
          {{ user.name }}
        </div>
      </div>
    </div>
  \`
})
export class AdvancedAsyncComponent {
  users$: Observable<any[]>;

  constructor(private userService: UserService) {
    this.users$ = this.userService.getUsers();
  }
}`,
        },
      ],
    },
    {
      id: "q5",
      question: "How do you handle errors in Observables?",
      answer:
        "Use catchError operator to handle errors gracefully. It receives the error and returns a new Observable (replacement or empty). Can also use retry operator to retry failed operations. Use finalize for cleanup regardless of success/error.",
      codeSnippets: [
        {
          language: "typescript",
          code: `import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, finalize, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) { }

  // 1. Basic error handling with catchError
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>('/api/users').pipe(
      catchError(error => {
        console.error('Error loading users:', error);
        return of([]); // Return empty array as fallback
      })
    );
  }

  // 2. Retry failed requests
  getUsersWithRetry(): Observable<any[]> {
    return this.http.get<any[]>('/api/users').pipe(
      retry(3),  // Retry up to 3 times
      catchError(error => {
        console.error('Failed after 3 retries:', error);
        return of([]);
      })
    );
  }

  // 3. Re-throw error after handling
  getUsersRethrow(): Observable<any[]> {
    return this.http.get<any[]>('/api/users').pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        
        // Log to error service
        this.logError(error);
        
        // Re-throw error
        return throwError(() => new Error('Failed to load users'));
      })
    );
  }

  // 4. Different error handling based on status
  getUsersAdvanced(): Observable<any[]> {
    return this.http.get<any[]>('/api/users').pipe(
      catchError(error => {
        if (error.status === 404) {
          console.log('Users not found');
          return of([]);
        } else if (error.status === 401) {
          console.log('Unauthorized');
          // Redirect to login
          return throwError(() => new Error('Unauthorized'));
        } else {
          console.error('Unknown error:', error);
          return of([]);
        }
      })
    );
  }

  // 5. Using finalize for cleanup
  getUsersWithCleanup(): Observable<any[]> {
    let loading = true;
    
    return this.http.get<any[]>('/api/users').pipe(
      tap(() => console.log('Request started')),
      finalize(() => {
        // Always executes (success or error)
        loading = false;
        console.log('Request completed');
      }),
      catchError(error => {
        console.error('Error:', error);
        return of([]);
      })
    );
  }

  private logError(error: any): void {
    // Send to logging service
  }
}

// Component with error handling
@Component({
  selector: 'app-users',
  template: \`
    <div *ngIf="loading">Loading...</div>
    <div *ngIf="error" class="error">{{ error }}</div>
    <div *ngIf="!loading && !error">
      <div *ngFor="let user of users">{{ user.name }}</div>
    </div>
  \`
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  loading = false;
  error: string | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;
    this.error = null;

    this.apiService.getUsersAdvanced().pipe(
      finalize(() => this.loading = false)
    ).subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (err) => {
        this.error = err.message || 'An error occurred';
        console.error('Error in component:', err);
      }
    });
  }

  // Retry mechanism
  retry() {
    this.loadUsers();
  }
}`,
        },
      ],
    },
    {
      id: "q6",
      question: "What is the difference between mergeMap, switchMap, and concatMap?",
      answer:
        "All three flatten nested Observables, but differ in behavior: switchMap cancels previous inner observables (for searches), mergeMap processes all in parallel (for independent requests), concatMap processes sequentially in order (for ordered operations).",
      codeSnippets: [
        {
          language: "typescript",
          code: `import { Component } from '@angular/core';
import { fromEvent, interval, of } from 'rxjs';
import { 
  switchMap, mergeMap, concatMap, 
  map, take, delay 
} from 'rxjs/operators';

@Component({
  selector: 'app-operators-demo',
  template: '<div>Check console for output</div>'
})
export class OperatorsDemoComponent {
  
  // 1. switchMap - Cancels previous, keeps only latest
  // USE FOR: Search, autocomplete, GET requests
  demonstrateSwitchMap() {
    const clicks = fromEvent(document, 'click');
    
    clicks.pipe(
      switchMap(() => interval(1000).pipe(take(5)))
    ).subscribe(val => console.log('switchMap:', val));
    
    // If you click again, previous interval is CANCELLED
    // Only the latest interval runs
  }

  // 2. mergeMap - Processes all in parallel
  // USE FOR: Independent operations, batch operations
  demonstrateMergeMap() {
    of('user1', 'user2', 'user3').pipe(
      mergeMap(userId => 
        this.fetchUser(userId).pipe(
          map(user => ({ userId, user }))
        )
      )
    ).subscribe(result => console.log('mergeMap:', result));
    
    // All fetchUser calls run in parallel
    // Results may arrive in any order
  }

  // 3. concatMap - Processes sequentially (wait for previous)
  // USE FOR: Ordered operations, dependent requests
  demonstrateConcatMap() {
    of('user1', 'user2', 'user3').pipe(
      concatMap(userId => 
        this.fetchUser(userId).pipe(
          map(user => ({ userId, user }))
        )
      )
    ).subscribe(result => console.log('concatMap:', result));
    
    // Fetches users one at a time, in order
    // Waits for each to complete before starting next
  }

  // Practical examples
  
  // Search with switchMap (cancels previous search)
  searchUsers(searchTerm: string) {
    return of(searchTerm).pipe(
      switchMap(term => this.apiSearch(term))
    );
    // If user types fast, only last search executes
  }

  // Batch update with mergeMap (parallel)
  updateMultipleUsers(userIds: string[]) {
    return of(...userIds).pipe(
      mergeMap(id => this.updateUser(id))
    );
    // All updates happen simultaneously
  }

  // Sequential operations with concatMap
  processQueueInOrder(tasks: any[]) {
    return of(...tasks).pipe(
      concatMap(task => this.processTask(task))
    );
    // Tasks processed one by one, maintaining order
  }

  // Helper methods
  private fetchUser(userId: string) {
    return of({ id: userId, name: \`User \${userId}\` }).pipe(
      delay(Math.random() * 1000)  // Random delay
    );
  }

  private apiSearch(term: string) {
    return of([{ name: term }]).pipe(delay(500));
  }

  private updateUser(id: string) {
    return of({ id, updated: true }).pipe(delay(300));
  }

  private processTask(task: any) {
    return of({ task, processed: true }).pipe(delay(1000));
  }
}

// Visual comparison
/**
 * INPUT: [A, B, C] (emitted over time)
 * 
 * switchMap:
 * A-----X (cancelled when B arrives)
 * B-----X (cancelled when C arrives)  
 * C-----result
 * 
 * mergeMap:
 * A-----resultA
 * B-----resultB
 * C-----resultC
 * (all run in parallel, any order)
 * 
 * concatMap:
 * A-----resultA
 *       B-----resultB
 *             C-----resultC
 * (sequential, ordered)
 */`,
        },
      ],
    },
  ],
};
