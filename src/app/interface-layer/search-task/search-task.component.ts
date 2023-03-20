import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from 'src/app/logic-layer/services/tasks.service';
import { FormGroup, FormControl } from '@angular/forms';
import { CrudOperations } from '../CrudOperations.model';
import { Task } from 'src/app/data-layer/task.model';

@Component({
  selector: 'app-search-task',
  templateUrl: './search-task.component.html',
  styleUrls: ['./search-task.component.css']
})
export class SearchTaskComponent implements OnInit {
  tasksList: Task[] = [];
  taskIsSelected = false;

  searchForm: FormGroup;
  taskData: Task = new Task(-1, "", "", "", "", -1);
  @Input() tasksListNotFoundMessage: string = "";

  @Input() confirmFormSubmitAlert: any;
  @Input() formSubmitAlertMessage: any;
  @Input() submitButtonText: string = "";

  @Input() crudOperation = CrudOperations.ADD;
  @Input() readonlyForm = false;

  constructor(public taskService: TasksService) { 
    this.tasksList = this.taskService.tasksList;
    let firstIndex = this.tasksList.length > 0 ? this.tasksList[0].taskID : 0;

    this.searchForm = new FormGroup({
      selectedTaskID: new FormControl(firstIndex)
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.taskData = this.taskService.getTaskByID(Number(this.searchForm.get('selectedTaskID')?.value));
    this.taskIsSelected = true;
  }
}
