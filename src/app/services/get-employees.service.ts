import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Employee } from '../shared/employee';

@Injectable({
  providedIn: 'root',
})
export class GetEmployeesService {
  url =
    'https://cors-anywhere.herokuapp.com/http://dummy.restapiexample.com/api/v1/';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url + 'employees');
  }

  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.url + 'employee/' + id);
  }
}
