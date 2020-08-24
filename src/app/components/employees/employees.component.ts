import { Component, OnInit } from '@angular/core';
import { GetEmployeesService } from '../../services/get-employees.service';
import { Employee } from 'src/app/shared/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  data;
  employees: Employee;
  displayedColumns: string[] = ['id', 'employee_name', 'link'];
  constructor(private employeeService: GetEmployeesService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.data = { data };
      this.employees = this.data.data.data;
      console.log(this.employees);
    });
  }

  handleEmployee(id) {
    console.log(id);
  }
}
