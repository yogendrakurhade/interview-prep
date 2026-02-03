import type { Topic } from "../../../types";

export const angularComponentsTopic: Topic = {
  id: "angular-components",
  name: "Components",
  questions: [
    {
      id: "q1",
      question: "What is a component in Angular?",
      answer:
        "A component controls a portion of the screen (view). It consists of a TypeScript class (logic), an HTML template (view), and CSS styles. Components are the building blocks of Angular applications and use the @Component decorator.",
      codeSnippets: [
        {
          language: "typescript",
          code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
  // Alternative inline:
  // template: '<div>{{ userName }}</div>',
  // styles: ['div { color: blue; }']
})
export class UserCardComponent {
  userName = 'John Doe';
  age = 30;
  
  greet() {
    return \`Hello, I'm \${this.userName}\`;
  }
}`,
        },
      ],
    },
    {
      id: "q2",
      question: "What is @Input() and how does parent-child communication work?",
      answer:
        "@Input() decorator allows a parent component to pass data to a child component. The child declares an @Input() property, and the parent binds to it using property binding [propertyName].",
      codeSnippets: [
        {
          language: "typescript",
          code: `// Child Component
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: \`
    <div>
      <h3>{{ title }}</h3>
      <p>Count: {{ count }}</p>
      <p>User: {{ user?.name }}</p>
    </div>
  \`
})
export class ChildComponent {
  @Input() title: string = '';
  @Input() count: number = 0;
  @Input() user?: { name: string; age: number };
  
  // With alias
  @Input('userName') displayName: string = '';
}

// Parent Component
@Component({
  selector: 'app-parent',
  template: \`
    <app-child 
      [title]="parentTitle"
      [count]="parentCount"
      [user]="currentUser"
      [userName]="name">
    </app-child>
  \`
})
export class ParentComponent {
  parentTitle = 'Child Component';
  parentCount = 42;
  currentUser = { name: 'Alice', age: 25 };
  name = 'Bob';
}`,
        },
      ],
    },
    {
      id: "q3",
      question: "What is @Output() and EventEmitter?",
      answer:
        "@Output() decorator allows a child component to emit events to its parent. It uses EventEmitter to send data upwards. The parent listens using event binding (eventName).",
      codeSnippets: [
        {
          language: "typescript",
          code: `// Child Component
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: \`
    <button (click)="sendMessage()">Send Message</button>
    <button (click)="increment()">Increment</button>
  \`
})
export class ChildComponent {
  @Output() messageEvent = new EventEmitter<string>();
  @Output() countChanged = new EventEmitter<number>();
  
  private count = 0;
  
  sendMessage() {
    this.messageEvent.emit('Hello from child!');
  }
  
  increment() {
    this.count++;
    this.countChanged.emit(this.count);
  }
}

// Parent Component
@Component({
  selector: 'app-parent',
  template: \`
    <app-child 
      (messageEvent)="receiveMessage($event)"
      (countChanged)="onCountChanged($event)">
    </app-child>
    <p>{{ message }}</p>
    <p>Count: {{ totalCount }}</p>
  \`
})
export class ParentComponent {
  message = '';
  totalCount = 0;
  
  receiveMessage(msg: string) {
    this.message = msg;
  }
  
  onCountChanged(count: number) {
    this.totalCount = count;
  }
}`,
        },
      ],
    },
    {
      id: "q4",
      question: "What is ViewChild and how do you access child components?",
      answer:
        "@ViewChild allows a parent to access child component instances, DOM elements, or template reference variables. It provides direct access to child component properties and methods after the view initializes.",
      codeSnippets: [
        {
          language: "typescript",
          code: `// Child Component
import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<p>{{ message }}</p>'
})
export class ChildComponent {
  message = 'Child message';
  
  childMethod() {
    return 'Called from parent!';
  }
}

// Parent Component
import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: \`
    <app-child #childComp></app-child>
    <input #myInput type="text">
    <button (click)="accessChild()">Access Child</button>
  \`
})
export class ParentComponent implements AfterViewInit {
  // Access child component
  @ViewChild('childComp') childComponent!: ChildComponent;
  
  // Access DOM element
  @ViewChild('myInput') inputElement!: ElementRef<HTMLInputElement>;
  
  ngAfterViewInit() {
    // Available after view initialization
    console.log(this.childComponent.message);
    this.inputElement.nativeElement.focus();
  }
  
  accessChild() {
    const result = this.childComponent.childMethod();
    console.log(result);
    this.childComponent.message = 'Updated from parent';
  }
}`,
        },
      ],
    },
    {
      id: "q5",
      question: "What is content projection (ng-content)?",
      answer:
        "Content projection allows you to insert content from a parent component into a child component's template using <ng-content>. It's similar to React's children prop or Vue's slots. Supports single-slot and multi-slot projection.",
      codeSnippets: [
        {
          language: "typescript",
          code: `// Card Component (Reusable Container)
@Component({
  selector: 'app-card',
  template: \`
    <div class="card">
      <div class="card-header">
        <ng-content select="[header]"></ng-content>
      </div>
      <div class="card-body">
        <ng-content></ng-content>
      </div>
      <div class="card-footer">
        <ng-content select="[footer]"></ng-content>
      </div>
    </div>
  \`,
  styles: [\`.card { border: 1px solid #ccc; padding: 16px; }\`]
})
export class CardComponent { }

// Parent Component Usage
@Component({
  selector: 'app-parent',
  template: \`
    <app-card>
      <h2 header>User Profile</h2>
      
      <p>This is the main content area</p>
      <p>Multiple elements can go here</p>
      
      <button footer>Close</button>
    </app-card>
  \`
})
export class ParentComponent { }`,
        },
      ],
    },
    {
      id: "q6",
      question: "What is the difference between ViewChild and ContentChild?",
      answer:
        "@ViewChild accesses elements in the component's own template. @ContentChild accesses elements projected into the component via <ng-content>. ViewChild is available in ngAfterViewInit, ContentChild in ngAfterContentInit.",
      codeSnippets: [
        {
          language: "typescript",
          code: `// Button Component
@Component({
  selector: 'app-button',
  template: '<button>{{ label }}</button>'
})
export class ButtonComponent {
  @Input() label = 'Click';
}

// Container Component
import { Component, ViewChild, ContentChild, 
         AfterViewInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-container',
  template: \`
    <div>
      <h3>Container</h3>
      <app-button #viewButton label="View Button"></app-button>
      <ng-content></ng-content>
    </div>
  \`
})
export class ContainerComponent implements AfterViewInit, AfterContentInit {
  // Accesses button in own template
  @ViewChild('viewButton') viewBtn!: ButtonComponent;
  
  // Accesses projected button
  @ContentChild('contentButton') contentBtn!: ButtonComponent;
  
  ngAfterViewInit() {
    console.log('ViewChild:', this.viewBtn.label);
  }
  
  ngAfterContentInit() {
    console.log('ContentChild:', this.contentBtn?.label);
  }
}

// Parent Usage
@Component({
  selector: 'app-parent',
  template: \`
    <app-container>
      <app-button #contentButton label="Content Button"></app-button>
    </app-container>
  \`
})
export class ParentComponent { }`,
        },
      ],
    },
  ],
};
