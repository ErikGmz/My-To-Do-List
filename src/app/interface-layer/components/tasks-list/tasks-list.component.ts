import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/logic-layer/services/tasks.service';
import { Task } from 'src/app/data-layer/task.model';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasksList: Task[] = [];
  tasksListNotFoundMessage = "The My-To-Do list is currently empty, so there's not any task to check.";

  constructor(public tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasksList = this.tasksService.tasksList;
  }

}