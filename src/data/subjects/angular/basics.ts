import type { Topic } from "../../../types";

export const angularBasicsTopic: Topic = {
  id: "angular-basics",
  name: "Basics",
  questions: [
    {
      id: "q1",
      question: "What is Angular and how is it different from AngularJS?",
      answer:
        "Angular is a TypeScript-based framework for building web applications. Unlike AngularJS (Angular 1.x), Angular uses component-based architecture, TypeScript, improved performance, mobile support, and modern tooling. AngularJS used controllers and scope, while Angular uses components and services.",
      codeSnippets: [
        {
          language: "typescript",
          code: `// Angular Component (Angular 2+)
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: '<h1>{{ title }}</h1>',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  title = 'Hello Angular';
}

// AngularJS Controller (Angular 1.x) - OLD
angular.module('app').controller('HelloController', 
  function($scope) {
    $scope.title = 'Hello AngularJS';
  }
);`,
        },
      ],
    },
    {
      id: "q2",
      question: "What are Angular modules (NgModules)?",
      answer:
        "NgModules are containers for cohesive blocks of code. They organize an application into functional units. Every Angular app has at least one module (AppModule). Modules can import other modules and declare components, directives, and pipes.",
      codeSnippets: [
        {
          language: "typescript",
          code: `import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,    // Components, directives, pipes
    UserComponent
  ],
  imports: [
    BrowserModule,   // Other modules
    FormsModule
  ],
  providers: [],     // Services
  bootstrap: [AppComponent]  // Root component
})
export class AppModule { }`,
        },
      ],
    },
    {
      id: "q3",
      question: "What is the Angular CLI and what are its benefits?",
      answer:
        "Angular CLI is a command-line interface tool for initializing, developing, and maintaining Angular applications. It automates project setup, generates components/services, runs tests, builds for production, and follows best practices.",
      codeSnippets: [
        {
          language: "bash",
          code: `# Create new Angular application
ng new my-app

# Generate component
ng generate component user

# Generate service
ng generate service data

# Serve application (development)
ng serve

# Build for production
ng build --prod

# Run tests
ng test

# Generate module
ng generate module feature`,
        },
      ],
    },
    {
      id: "q4",
      question: "What is data binding in Angular?",
      answer:
        "Data binding is the synchronization between the component's data and the view. Angular supports four types: Interpolation (one-way from component to view), Property binding (one-way to view), Event binding (one-way from view to component), and Two-way binding (using [(ngModel)]).",
      codeSnippets: [
        {
          language: "typescript",
          code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  template: \`
    <!-- 1. Interpolation {{}} -->
    <h1>{{ title }}</h1>
    
    <!-- 2. Property Binding [] -->
    <img [src]="imageUrl" [alt]="imageAlt">
    <button [disabled]="isDisabled">Click</button>
    
    <!-- 3. Event Binding () -->
    <button (click)="handleClick()">Click Me</button>
    <input (keyup)="onKeyUp($event)">
    
    <!-- 4. Two-way Binding [(ngModel)] -->
    <input [(ngModel)]="username">
    <p>Hello, {{ username }}!</p>
  \`
})
export class BindingComponent {
  title = 'Data Binding Demo';
  imageUrl = 'assets/logo.png';
  imageAlt = 'Logo';
  isDisabled = false;
  username = '';

  handleClick() {
    console.log('Button clicked!');
  }

  onKeyUp(event: KeyboardEvent) {
    console.log('Key pressed:', event.key);
  }
}`,
        },
      ],
    },
    {
      id: "q5",
      question: "What are Angular decorators?",
      answer:
        "Decorators are functions that modify classes or class members. Angular provides decorators like @Component, @NgModule, @Injectable, @Input, @Output, etc. They add metadata that Angular uses to understand how to process the class.",
      codeSnippets: [
        {
          language: "typescript",
          code: `import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';

// @Component decorator
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  // @Input decorator - receives data from parent
  @Input() userName: string = '';
  
  // @Output decorator - sends data to parent
  @Output() userDeleted = new EventEmitter<string>();

  deleteUser() {
    this.userDeleted.emit(this.userName);
  }
}

// @Injectable decorator
@Injectable({
  providedIn: 'root'  // Available app-wide
})
export class UserService {
  getUsers() {
    return ['Alice', 'Bob', 'Charlie'];
  }
}`,
        },
      ],
    },
    {
      id: "q6",
      question: "What is the Angular lifecycle and what are lifecycle hooks?",
      answer:
        "Angular creates, updates, and destroys components. Lifecycle hooks are methods that let you tap into key moments in this lifecycle. Common hooks: ngOnInit (after component initialization), ngOnChanges (when input properties change), ngOnDestroy (before component destruction).",
      codeSnippets: [
        {
          language: "typescript",
          code: `import { Component, OnInit, OnChanges, OnDestroy, 
         Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: '<p>{{ message }}</p>'
})
export class LifecycleComponent implements OnInit, OnChanges, OnDestroy {
  @Input() data: string = '';
  message = '';
  private intervalId: any;

  // Called before ngOnInit, when input properties change
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges:', changes);
    if (changes['data']) {
      this.message = \`Data changed to: \${changes['data'].currentValue}\`;
    }
  }

  // Called once after component initialization
  ngOnInit() {
    console.log('ngOnInit: Component initialized');
    this.intervalId = setInterval(() => {
      console.log('Interval running');
    }, 1000);
  }

  // Called before component destruction
  ngOnDestroy() {
    console.log('ngOnDestroy: Cleaning up');
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  // Other hooks:
  // ngDoCheck, ngAfterContentInit, ngAfterContentChecked,
  // ngAfterViewInit, ngAfterViewChecked
}`,
        },
      ],
    },
  ],
};
