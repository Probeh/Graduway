import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '@models/employee';
import { EmployeeTask } from '@models/employee-task';
import { TodoService } from '@services/todo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  // ======================================= //
  @Input() public set currentEmployee(employee: Employee) { this.onEmployeeChange(employee) };
  @Output() public currentTaskChange: EventEmitter<EmployeeTask> = new EventEmitter();
  public $taskList: Observable<EmployeeTask[]>;
  // ======================================= //
  constructor(private service: TodoService) { }
  ngOnInit() { }
  // ======================================= //
  public onEmployeeChange(employee: Employee) {
    this.$taskList = this.service.getEmployeeTasks(employee.id);
  }
}
