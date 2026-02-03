import type { Topic } from "../../../types";

export const angularRoutingTopic: Topic = {
  id: "angular-routing",
  name: "Routing & Navigation",
  questions: [
    {
      id: "q1",
      question: "What is Angular Router and how do you configure it?",
      answer:
        "Angular Router enables navigation between views/components based on URL paths. It's configured by defining routes (path-component mappings) in a Routes array and importing RouterModule. Supports lazy loading, guards, and nested routes.",
      codeSnippets: [
        {
          language: "typescript",
          code: `// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  // Default route
  { path: 'about', component: AboutComponent },
  { path: 'user/:id', component: UserComponent },  // Route with parameter
  { path: '**', component: NotFoundComponent }  // Wildcard for 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// app.component.html
// <router-outlet></router-outlet>  // Renders matched component

// app.module.ts
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [AppRoutingModule],
  // ...
})
export class AppModule { }`,
        },
      ],
    },
    {
      id: "q2",
      question: "How do you navigate programmatically in Angular?",
      answer:
        "Use the Router service's navigate() or navigateByUrl() methods. navigate() takes an array of path segments and can include route parameters. navigateByUrl() takes a complete URL string.",
      codeSnippets: [
        {
          language: "typescript",
          code: `import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: \`
    <button (click)="goToAbout()">Go to About</button>
    <button (click)="goToUser(42)">Go to User 42</button>
    <button (click)="goToSearch()">Search</button>
  \`
})
export class HomeComponent {
  constructor(private router: Router) { }

  // Method 1: navigate() with array
  goToAbout() {
    this.router.navigate(['/about']);
  }

  // Navigate with parameters
  goToUser(userId: number) {
    this.router.navigate(['/user', userId]);
    // Results in: /user/42
  }

  // Navigate with query parameters
  goToSearch() {
    this.router.navigate(['/search'], {
      queryParams: { q: 'angular', page: 1 }
    });
    // Results in: /search?q=angular&page=1
  }

  // Method 2: navigateByUrl() with string
  goToProfile() {
    this.router.navigateByUrl('/profile');
  }

  // Relative navigation
  goToRelative() {
    this.router.navigate(['../sibling'], { 
      relativeTo: this.route  // Need ActivatedRoute injected
    });
  }
}`,
        },
      ],
    },
    {
      id: "q3",
      question: "How do you access route parameters and query parameters?",
      answer:
        "Use ActivatedRoute service to access route parameters (e.g., /user/:id) via params observable or snapshot.params. Query parameters (e.g., /search?q=test) are accessed via queryParams observable or snapshot.queryParams.",
      codeSnippets: [
        {
          language: "typescript",
          code: `import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

// Route: /user/:id
@Component({
  selector: 'app-user',
  template: \`
    <h2>User ID: {{ userId }}</h2>
    <p>Query: {{ query }}</p>
  \`
})
export class UserComponent implements OnInit {
  userId: string = '';
  query: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Method 1: Using Observable (recommended for dynamic changes)
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.userId = params.get('id') || '';
      console.log('User ID changed:', this.userId);
    });

    // Query parameters observable
    this.route.queryParamMap.subscribe(params => {
      this.query = params.get('q') || '';
    });

    // Method 2: Using Snapshot (for initial values only)
    const id = this.route.snapshot.paramMap.get('id');
    const query = this.route.snapshot.queryParamMap.get('q');
    console.log('Initial:', id, query);

    // Alternative: Direct access
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });

    this.route.queryParams.subscribe(params => {
      this.query = params['q'];
    });
  }
}`,
        },
      ],
    },
    {
      id: "q4",
      question: "What are Route Guards and what types are available?",
      answer:
        "Route Guards control navigation to/from routes. Types: CanActivate (allow access), CanActivateChild (child routes), CanDeactivate (leaving route), CanLoad (lazy loading), Resolve (pre-fetch data). Guards return boolean or Observable<boolean>.",
      codeSnippets: [
        {
          language: "typescript",
          code: `// auth.guard.ts - CanActivate Guard
import { Injectable } from '@angular/core';
import { 
  CanActivate, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot, 
  Router 
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isLoggedIn()) {
      return true;  // Allow navigation
    }
    
    // Redirect to login
    this.router.navigate(['/login'], {
      queryParams: { returnUrl: state.url }
    });
    return false;  // Block navigation
  }
}

// unsaved-changes.guard.ts - CanDeactivate Guard
export interface CanComponentDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
}

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(
    component: CanComponentDeactivate
  ): boolean | Observable<boolean> {
    return component.canDeactivate ? 
      component.canDeactivate() : true;
  }
}

// form.component.ts
@Component({
  selector: 'app-form',
  template: '<form>...</form>'
})
export class FormComponent implements CanComponentDeactivate {
  hasUnsavedChanges = false;

  canDeactivate(): boolean {
    if (this.hasUnsavedChanges) {
      return confirm('You have unsaved changes. Leave anyway?');
    }
    return true;
  }
}

// app-routing.module.ts - Apply guards
const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]  // Protect route
  },
  {
    path: 'form',
    component: FormComponent,
    canDeactivate: [UnsavedChangesGuard]  // Warn before leaving
  }
];`,
        },
      ],
    },
    {
      id: "q5",
      question: "What is lazy loading and how do you implement it?",
      answer:
        "Lazy loading loads feature modules on-demand rather than at startup, reducing initial bundle size and improving performance. Use loadChildren in routes to specify the module path. Requires separate routing module for the feature.",
      codeSnippets: [
        {
          language: "typescript",
          code: `// app-routing.module.ts
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule)  // Lazy load module
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module')
      .then(m => m.UsersModule),
    canLoad: [AuthGuard]  // Guard lazy loading
  }
];

// admin/admin-routing.module.ts
const routes: Routes = [
  { path: '', component: AdminDashboardComponent },
  { path: 'users', component: AdminUsersComponent },
  { path: 'settings', component: AdminSettingsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // forChild for lazy module
  exports: [RouterModule]
})
export class AdminRoutingModule { }

// admin/admin.module.ts
@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminUsersComponent,
    AdminSettingsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

// Result: 
// - /admin routes to AdminDashboardComponent
// - /admin/users routes to AdminUsersComponent
// - Module only loaded when /admin/* is accessed`,
        },
      ],
    },
    {
      id: "q6",
      question: "How do you create child/nested routes?",
      answer:
        "Child routes are defined using the children property in a route configuration. The parent component must include a <router-outlet> where child components render. Useful for layouts with nested navigation.",
      codeSnippets: [
        {
          language: "typescript",
          code: `// app-routing.module.ts
const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,  // Parent component
    children: [
      { path: '', component: ProductListComponent },  // /products
      { path: ':id', component: ProductDetailComponent },  // /products/123
      { path: ':id/edit', component: ProductEditComponent }  // /products/123/edit
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'overview', component: OverviewComponent },
      { path: 'stats', component: StatsComponent },
      { path: '', redirectTo: 'overview', pathMatch: 'full' }
    ]
  }
];

// products.component.ts (Parent)
@Component({
  selector: 'app-products',
  template: \`
    <div class="products-layout">
      <h1>Products</h1>
      <nav>
        <a routerLink="/">All Products</a>
        <a routerLink="/products/1">Product 1</a>
      </nav>
      
      <!-- Child components render here -->
      <router-outlet></router-outlet>
    </div>
  \`
})
export class ProductsComponent { }

// product-detail.component.ts (Child)
@Component({
  selector: 'app-product-detail',
  template: \`
    <h2>Product Details</h2>
    <p>Product ID: {{ productId }}</p>
  \`
})
export class ProductDetailComponent implements OnInit {
  productId: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id') || '';
  }
}`,
        },
      ],
    },
  ],
};
