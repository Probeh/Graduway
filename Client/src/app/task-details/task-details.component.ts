import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeTask } from '@models/employee-task';
import { TodoService } from '@services/todo.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  // ======================================= //
  @Input() public set currentTask(task: EmployeeTask) { this.onTaskChange(task); };
  @Output() public currentTaskChange: EventEmitter<EmployeeTask> = new EventEmitter();
  // ======================================= //
  constructor(private service: TodoService) { }
  ngOnInit() { }
  // ======================================= //
  public onTaskChange(task: EmployeeTask) {
    this.currentTaskChange.next(task);
  }

}
