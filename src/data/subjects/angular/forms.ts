import type { Topic } from "../../../types";

export const angularFormsTopic: Topic = {
  id: "angular-forms",
  name: "Forms",
  questions: [
    {
      id: "q1",
      question: "What are the two types of forms in Angular?",
      answer:
        "Angular has Template-driven forms (simpler, uses directives in template) and Reactive forms (more powerful, programmatic approach with FormControl/FormGroup). Template-driven is good for simple forms, Reactive is better for complex validation and dynamic forms.",
      codeSnippets: [
        {
          language: "typescript",
          code: `// Template-driven Forms
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  template: \`
    <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">
      <input 
        type="text" 
        name="username" 
        [(ngModel)]="user.username" 
        required
        #username="ngModel">
      <div *ngIf="username.invalid && username.touched">
        Username is required
      </div>
      
      <input 
        type="email" 
        name="email" 
        [(ngModel)]="user.email" 
        required 
        email>
      
      <button [disabled]="myForm.invalid">Submit</button>
    </form>
  \`
})
export class TemplateFormComponent {
  user = { username: '', email: '' };

  onSubmit(form: any) {
    console.log('Form value:', form.value);
    console.log('User model:', this.user);
  }
}

// Need FormsModule in app.module.ts
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule]
})
export class AppModule { }`,
        },
      ],
    },
    {
      id: "q2",
      question: "How do you create a Reactive Form?",
      answer:
        "Reactive forms use FormControl, FormGroup, and FormBuilder. Define form structure in component class, not template. Provides better testing, validation, and dynamic form manipulation. Requires ReactiveFormsModule.",
      codeSnippets: [
        {
          language: "typescript",
          code: `import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  template: \`
    <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
      <div>
        <label>Username:</label>
        <input formControlName="username">
        <div *ngIf="userForm.get('username')?.invalid && 
                    userForm.get('username')?.touched">
          <small *ngIf="userForm.get('username')?.errors?.['required']">
            Username is required
          </small>
          <small *ngIf="userForm.get('username')?.errors?.['minlength']">
            Min 3 characters
          </small>
        </div>
      </div>

      <div>
        <label>Email:</label>
        <input formControlName="email">
        <div *ngIf="userForm.get('email')?.invalid && 
                    userForm.get('email')?.touched">
          Invalid email
        </div>
      </div>

      <div>
        <label>Age:</label>
        <input type="number" formControlName="age">
      </div>

      <button [disabled]="userForm.invalid">Submit</button>
    </form>

    <p>Form Status: {{ userForm.status }}</p>
    <p>Form Value: {{ userForm.value | json }}</p>
  \`
})
export class ReactiveFormComponent implements OnInit {
  userForm!: FormGroup;

  // Method 1: Without FormBuilder
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // Method 1: Manual FormControl creation
    this.createFormManually();

    // Method 2: Using FormBuilder (recommended)
    // this.createFormWithBuilder();
  }

  createFormManually() {
    this.userForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      age: new FormControl(null, [
        Validators.min(18),
        Validators.max(100)
      ])
    });
  }

  createFormWithBuilder() {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      age: [null, [Validators.min(18), Validators.max(100)]]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form submitted:', this.userForm.value);
      this.userForm.reset();  // Reset form
    }
  }
}

// app.module.ts
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ReactiveFormsModule]
})
export class AppModule { }`,
        },
      ],
    },
    {
      id: "q3",
      question: "What are FormArray and how do you use them?",
      answer:
        "FormArray manages dynamic arrays of FormControls, FormGroups, or other FormArrays. Useful for dynamic forms where users can add/remove fields. Provides methods like push(), removeAt(), and at().",
      codeSnippets: [
        {
          language: "typescript",
          code: `import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  template: \`
    <form [formGroup]="orderForm" (ngSubmit)="onSubmit()">
      <div>
        <label>Customer Name:</label>
        <input formControlName="customerName">
      </div>

      <div formArrayName="items">
        <h3>Order Items</h3>
        <div *ngFor="let item of items.controls; let i = index" 
             [formGroupName]="i">
          <div class="item-group">
            <input formControlName="name" placeholder="Item name">
            <input type="number" formControlName="quantity" placeholder="Qty">
            <input type="number" formControlName="price" placeholder="Price">
            <button type="button" (click)="removeItem(i)">Remove</button>
          </div>
        </div>
      </div>

      <button type="button" (click)="addItem()">Add Item</button>
      <button [disabled]="orderForm.invalid">Submit Order</button>
    </form>

    <pre>{{ orderForm.value | json }}</pre>
  \`
})
export class DynamicFormComponent implements OnInit {
  orderForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.fb.group({
      customerName: ['', Validators.required],
      items: this.fb.array([
        this.createItem()  // Initial item
      ])
    });
  }

  // Getter for FormArray
  get items(): FormArray {
    return this.orderForm.get('items') as FormArray;
  }

  // Create FormGroup for single item
  createItem(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      price: [0, [Validators.required, Validators.min(0)]]
    });
  }

  // Add new item
  addItem() {
    this.items.push(this.createItem());
  }

  // Remove item at index
  removeItem(index: number) {
    this.items.removeAt(index);
  }

  onSubmit() {
    if (this.orderForm.valid) {
      console.log('Order:', this.orderForm.value);
      
      // Calculate total
      const total = this.items.value.reduce((sum: number, item: any) => {
        return sum + (item.quantity * item.price);
      }, 0);
      
      console.log('Total:', total);
    }
  }
}`,
        },
      ],
    },
    {
      id: "q4",
      question: "How do you create custom validators?",
      answer:
        "Custom validators are functions that return a ValidationErrors object or null. They can be synchronous or asynchronous. Implement ValidatorFn interface for reusable validators. Can access FormControl value and return error object.",
      codeSnippets: [
        {
          language: "typescript",
          code: `import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// 1. Simple custom validator
export function forbiddenNameValidator(forbidden: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isForbidden = control.value?.toLowerCase() === forbidden.toLowerCase();
    return isForbidden ? { forbiddenName: { value: control.value } } : null;
  };
}

// 2. Password match validator (cross-field)
export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password || !confirmPassword) {
      return null;
    }

    return password.value === confirmPassword.value 
      ? null 
      : { passwordMismatch: true };
  };
}

// 3. Async validator (e.g., checking username availability)
import { Injectable } from '@angular/core';
import { AsyncValidatorFn, AbstractControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, delay, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UsernameValidator {
  constructor(private http: HttpClient) { }

  usernameExists(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (!control.value) {
        return of(null);
      }

      return this.http.get<boolean>(\`/api/check-username/\${control.value}\`)
        .pipe(
          delay(500),  // Debounce
          map(exists => exists ? { usernameTaken: true } : null),
          catchError(() => of(null))
        );
    };
  }
}

// Using custom validators in component
@Component({
  selector: 'app-register',
  template: \`
    <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
      <div>
        <input formControlName="username" placeholder="Username">
        <div *ngIf="registerForm.get('username')?.invalid && 
                    registerForm.get('username')?.touched">
          <small *ngIf="registerForm.get('username')?.errors?.['required']">
            Required
          </small>
          <small *ngIf="registerForm.get('username')?.errors?.['forbiddenName']">
            This name is forbidden
          </small>
          <small *ngIf="registerForm.get('username')?.errors?.['usernameTaken']">
            Username already taken
          </small>
        </div>
      </div>

      <div formGroupName="passwords">
        <input type="password" formControlName="password">
        <input type="password" formControlName="confirmPassword">
        <div *ngIf="registerForm.get('passwords')?.errors?.['passwordMismatch']">
          Passwords don't match
        </div>
      </div>

      <button [disabled]="registerForm.invalid">Register</button>
    </form>
  \`
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usernameValidator: UsernameValidator
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['',
        [Validators.required, forbiddenNameValidator('admin')],
        [this.usernameValidator.usernameExists()]  // Async validator
      ],
      passwords: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required]
      }, { validators: passwordMatchValidator() })  // Group validator
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Registered:', this.registerForm.value);
    }
  }
}`,
        },
      ],
    },
    {
      id: "q5",
      question: "How do you handle form submission and validation states?",
      answer:
        "Forms have status properties (valid, invalid, pending, pristine, dirty, touched, untouched). Access via form.status or control.status. Use these to disable submit buttons, show error messages conditionally, or track user interaction.",
      codeSnippets: [
        {
          language: "typescript",
          code: `import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  template: \`
    <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
      <div>
        <label>Name:</label>
        <input formControlName="name">
        
        <!-- Show errors only when touched and invalid -->
        <div *ngIf="name.invalid && (name.dirty || name.touched)" 
             class="error">
          <div *ngIf="name.errors?.['required']">Name is required</div>
          <div *ngIf="name.errors?.['minlength']">
            Name must be at least 
            {{ name.errors?.['minlength'].requiredLength }} characters
          </div>
        </div>
      </div>

      <div>
        <label>Email:</label>
        <input formControlName="email">
        
        <!-- Different error states -->
        <div *ngIf="email.invalid && email.touched" class="error">
          <div *ngIf="email.errors?.['required']">Email is required</div>
          <div *ngIf="email.errors?.['email']">Invalid email format</div>
        </div>
      </div>

      <!-- Submit button disabled if form invalid -->
      <button 
        type="submit" 
        [disabled]="userForm.invalid || submitting">
        {{ submitting ? 'Submitting...' : 'Submit' }}
      </button>

      <!-- Reset button -->
      <button 
        type="button" 
        (click)="onReset()"
        [disabled]="userForm.pristine">
        Reset
      </button>
    </form>

    <!-- Debug info -->
    <div class="debug">
      <p>Form Status: {{ userForm.status }}</p>
      <p>Form Valid: {{ userForm.valid }}</p>
      <p>Form Pristine: {{ userForm.pristine }}</p>
      <p>Form Touched: {{ userForm.touched }}</p>
      <p>Name Status: {{ name.status }}</p>
      <p>Name Errors: {{ name.errors | json }}</p>
    </div>
  \`
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;
  submitting = false;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    });

    // Listen to form value changes
    this.userForm.valueChanges.subscribe(value => {
      console.log('Form changed:', value);
    });

    // Listen to status changes
    this.userForm.statusChanges.subscribe(status => {
      console.log('Status changed:', status);
    });

    // Listen to specific field
    this.name.valueChanges.subscribe(value => {
      console.log('Name changed:', value);
    });
  }

  // Convenience getters for form controls
  get name() {
    return this.userForm.get('name')!;
  }

  get email() {
    return this.userForm.get('email')!;
  }

  onSubmit() {
    this.submitted = true;

    // Mark all as touched to show errors
    this.userForm.markAllAsTouched();

    if (this.userForm.valid) {
      this.submitting = true;

      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', this.userForm.value);
        this.submitting = false;
        this.userForm.reset();
        this.submitted = false;
      }, 2000);
    } else {
      console.log('Form is invalid');
    }
  }

  onReset() {
    this.userForm.reset();
    this.submitted = false;
  }

  // Manually set values
  populateForm() {
    this.userForm.patchValue({
      name: 'John Doe'
      // email not set
    });

    // Or set all values
    this.userForm.setValue({
      name: 'John Doe',
      email: 'john@example.com'
    });
  }
}`,
        },
      ],
    },
  ],
};
