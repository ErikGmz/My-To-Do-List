import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from 'src/app/logic-layer/services/tasks.service';
import { Task } from 'src/app/data-layer/task.model';

@Component({
  selector: 'app-search-task',
  templateUrl: './search-task.component.html',
  styleUrls: ['./search-task.component.css']
})
export class SearchTaskComponent implements OnInit {
  tasksList: Task[];
  @Input() tasksListNotFoundMessage: string = "";

  constructor(public taskService: TasksService) { 
    this.tasksList = this.taskService.getTasksList();
  }

  ngOnInit(): void {
  }

  onSubmit() {
  }
}
