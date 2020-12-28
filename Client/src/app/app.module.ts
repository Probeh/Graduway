import { BrowserModule                           } from '@angular/platform-browser'             ;
import { NgModule                                } from '@angular/core'                         ;
import { AppRoutingModule                        } from './app-routing.module'                  ;
import { AppComponent                            } from './app.component'                       ;
import { EmployeeComponent                       } from './employee/employee.component'         ;
import { TaskListComponent                       } from './task-list/task-list.component'       ;
import { TaskDetailsComponent                    } from './task-details/task-details.component' ;
import { HttpClientModule    , HTTP_INTERCEPTORS } from '@angular/common/http'                  ;
import { RequestInterceptor                      } from '@services/request.interceptor'         ;
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent         ,
    EmployeeComponent    ,
    TaskListComponent    ,
    TaskDetailsComponent,
    NavigationComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
