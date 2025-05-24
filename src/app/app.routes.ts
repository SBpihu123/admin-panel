import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductManagementComponent } from './components/product-management/product-management.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { TransactionMonitoringComponent } from './components/transaction-monitoring/transaction-monitoring.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductManagementComponent },
  { path: 'users', component: UserManagementComponent },
  { path: 'transactions', component: TransactionMonitoringComponent },
  { path: '**', redirectTo: '/dashboard' }
];
