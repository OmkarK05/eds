import { Routes } from '@angular/router';

import { LoginComponent } from '../components/login/login.component';
import { EmployeesComponent } from '../components/employees/employees.component';
import { EmployeeDetailsComponent } from '../components/employee-details/employee-details.component';
import { AuthGuard } from '../auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'employees',
    component: EmployeesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'employees/:id',
    component: EmployeeDetailsComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
