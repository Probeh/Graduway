import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Employee } from '@models/employee';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  // ======================================= //
  constructor(private http: HttpClient) { }
  // ======================================= //
  public getEmployeeTasks(employeeId: number): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${environment.api}/employees`);
  }
}
