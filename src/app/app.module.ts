import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';

import { AuthGuard } from './auth.guard';
import { AuthService } from './services/auth.service';

import { HttpClientModule } from '@angular/common/http';
import { GetEmployeesService } from './services/get-employees.service';
import { AgePipe } from './age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeesComponent,
    EmployeeDetailsComponent,
    AgePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
  ],
  providers: [AuthGuard, AuthService, GetEmployeesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
