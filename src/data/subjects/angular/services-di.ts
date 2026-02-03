import type { Topic } from "../../../types";

export const angularServicesDITopic: Topic = {
  id: "angular-services-di",
  name: "Services & Dependency Injection",
  questions: [
    {
      id: "q1",
      question: "What is a service in Angular?",
      answer:
        "A service is a class with a specific purpose, typically used for sharing data, implementing business logic, or communicating with external resources. Services are singleton instances that can be injected into components and other services using dependency injection.",
      codeSnippets: [
        {
          language: "typescript",
          code: `import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // Available throughout the app
})
export class UserService {
  private users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];

  getUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find(user => user.id === id);
  }

  addUser(name: string) {
    const newUser = { 
      id: this.users.length + 1, 
      name 
    };
    this.users.push(newUser);
    return newUser;
  }
}

// Using the service in a component
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  template: \`
    <div *ngFor="let user of users">
      {{ user.name }}
    </div>
  \`
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  // Inject service via constructor
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
}`,
        },
      ],
    },
    {
      id: "q2",
      question: "What is Dependency Injection (DI)?",
      answer:
        "Dependency Injection is a design pattern where dependencies are provided to a class rather than the class creating them. Angular's DI framework manages the creation and lifecycle of service instances, automatically providing them when needed.",
      codeSnippets: [
        {
          language: "typescript",
          code: `// Without DI (tightly coupled - BAD)
class UserComponent {
  userService: UserService;
  
  constructor() {
    this.userService = new UserService();  // Creates its own dependency
  }
}

// With DI (loosely coupled - GOOD)
import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  template: '<div>{{ users.length }} users</div>'
})
export class UserComponent {
  users: any[] = [];
  
  // Angular provides the instance
  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }
}

// Benefits of DI:
// 1. Testability - easy to mock dependencies
// 2. Reusability - same service instance across components
// 3. Maintainability - loose coupling
// 4. Flexibility - easy to swap implementations`,
        },
      ],
    },
    {
      id: "q3",
      question: "What are the different provider scopes in Angular?",
      answer:
        "Angular provides three scopes for services: 1) Root (providedIn: 'root') - singleton app-wide, 2) Module - one instance per module, 3) Component - new instance per component. The scope determines service lifetime and sharing.",
      codeSnippets: [
        {
          language: "typescript",
          code: `// 1. Root Level (Singleton - App-wide)
@Injectable({
  providedIn: 'root'  // Recommended for most services
})
export class GlobalService {
  // Single instance shared across entire app
}

// 2. Module Level
@NgModule({
  providers: [ModuleService]  // One instance per module
})
export class FeatureModule { }

@Injectable()
export class ModuleService {
  // New instance for each module that provides it
}

// 3. Component Level
@Component({
  selector: 'app-user',
  providers: [ComponentService]  // New instance per component
})
export class UserComponent {
  constructor(private service: ComponentService) { }
  // Each component instance gets its own service instance
}

@Injectable()
export class ComponentService {
  count = 0;  // Each component has separate count
}`,
        },
      ],
    },
    {
      id: "q4",
      question: "How do you inject one service into another?",
      answer:
        "To inject a service into another service, both must have the @Injectable decorator. The receiving service declares the dependency in its constructor, just like in components.",
      codeSnippets: [
        {
          language: "typescript",
          code: `// Logger Service
@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  log(message: string) {
    console.log(\`[LOG] \${new Date().toISOString()}: \${message}\`);
  }
  
  error(message: string) {
    console.error(\`[ERROR] \${new Date().toISOString()}: \${message}\`);
  }
}

// User Service depends on Logger Service
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = [];

  // Inject LoggerService
  constructor(private logger: LoggerService) {
    this.logger.log('UserService initialized');
  }

  addUser(name: string) {
    this.users.push({ id: Date.now(), name });
    this.logger.log(\`User added: \${name}\`);
  }

  deleteUser(id: number) {
    const index = this.users.findIndex(u => u.id === id);
    if (index > -1) {
      this.users.splice(index, 1);
      this.logger.log(\`User deleted: \${id}\`);
    } else {
      this.logger.error(\`User not found: \${id}\`);
    }
  }
}`,
        },
      ],
    },
    {
      id: "q5",
      question: "What is the purpose of @Injectable decorator?",
      answer:
        "@Injectable marks a class as available for dependency injection. It tells Angular's DI system that the class can have dependencies injected into it. While optional for services without dependencies, it's best practice to always use it.",
      codeSnippets: [
        {
          language: "typescript",
          code: `// Without @Injectable - only works if service has no dependencies
export class SimpleService {
  getData() {
    return ['data1', 'data2'];
  }
}

// With @Injectable - can receive dependencies
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'  // Modern way - tree-shakeable
})
export class DataService {
  // Can inject dependencies
  constructor(private http: HttpClient) { }

  fetchData() {
    return this.http.get('api/data');
  }
}

// Best practice: Always use @Injectable
@Injectable({
  providedIn: 'root'
})
export class BestPracticeService {
  // Even without dependencies, use @Injectable
  // Makes it easier to add dependencies later
  // Enables tree shaking
}`,
        },
      ],
    },
    {
      id: "q6",
      question: "What is HttpClient and how do you use it?",
      answer:
        "HttpClient is Angular's service for making HTTP requests. It returns Observables, supports request/response interceptors, automatic JSON parsing, and error handling. Must import HttpClientModule to use it.",
      codeSnippets: [
        {
          language: "typescript",
          code: `// 1. Import HttpClientModule in app.module.ts
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  // ...
})
export class AppModule { }

// 2. Create a service using HttpClient
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.example.com';

  constructor(private http: HttpClient) { }

  // GET request
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(\`\${this.apiUrl}/users\`);
  }

  // GET with parameters
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(\`\${this.apiUrl}/users/\${id}\`);
  }

  // GET with query params
  searchUsers(term: string): Observable<User[]> {
    const params = new HttpParams()
      .set('q', term)
      .set('limit', '10');
    
    return this.http.get<User[]>(\`\${this.apiUrl}/users\`, { params });
  }

  // POST request
  createUser(user: Partial<User>): Observable<User> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    return this.http.post<User>(
      \`\${this.apiUrl}/users\`,
      user,
      { headers }
    ).pipe(
      retry(2),  // Retry failed requests
      catchError(this.handleError)
    );
  }

  // PUT request
  updateUser(id: number, user: Partial<User>): Observable<User> {
    return this.http.put<User>(\`\${this.apiUrl}/users/\${id}\`, user);
  }

  // DELETE request
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(\`\${this.apiUrl}/users/\${id}\`);
  }

  private handleError(error: any): Observable<never> {
    console.error('API Error:', error);
    throw error;
  }
}

// 3. Use in component
@Component({
  selector: 'app-users',
  template: \`
    <div *ngFor="let user of users">{{ user.name }}</div>
  \`
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getUsers().subscribe({
      next: (data) => this.users = data,
      error: (err) => console.error('Error loading users', err)
    });
  }
}`,
        },
      ],
    },
  ],
};
