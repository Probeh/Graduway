import { HttpClient   } from '@angular/common/http' ;
import { Injectable   } from '@angular/core'        ;
import { environment  } from '@env/environment'     ;
import { EmployeeTask } from '@models/employee-task';
import { Observable   } from 'rxjs'                 ;

@Injectable({ providedIn: 'root' })
export class TodoService {
  // ======================================= //
  constructor(private http: HttpClient) { }
  // ======================================= //
  public getEmployeeTasks(employeeId: number): Observable<EmployeeTask[]> {
    return this.http.get<EmployeeTask[]>(`${environment.api}/tasks/${employeeId}`);
  }
}
