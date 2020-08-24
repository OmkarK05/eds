import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { GetEmployeesService } from 'src/app/services/get-employees.service';
import { Employee } from 'src/app/shared/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee;
  data;

  constructor(
    private route: ActivatedRoute,
    private employeeService: GetEmployeesService
  ) {}

  ngOnInit(): void {
    console.log('hello');
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          console.log(params.id);
          return this.employeeService.getEmployee(params.id);
        })
      )
      .subscribe((data) => {
        this.data = data;
        this.employee = this.data.data;
        console.log(this.employee);
      });
  }
}
