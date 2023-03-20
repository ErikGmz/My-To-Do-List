import { Component, OnInit } from '@angular/core';
import { CrudOperations } from '../CrudOperations.model';

@Component({
  selector: 'app-update-tasks',
  templateUrl: './update-tasks.component.html',
  styleUrls: ['./update-tasks.component.css']
})
export class UpdateTasksComponent implements OnInit {
  tasksListNotFoundMessage = "The My-To-Do list is currently empty, so there's not any task to update.";
  confirmFormSubmitAlert = {
    title: "Task update confirmation",
    text: "Do you want to update this task data from your My-To-Do List?",
  };
  formSubmitAlertMessage = {
    title: "Successfully updated new task!",
    text: "You can check the changes now in your My-To-Do List.",
  };
  submitButtonText: string = "Update Task Data";
  crudOperation = CrudOperations.UPDATE;
  readonlyForm = false;

  constructor() { }

  ngOnInit(): void {
  }

}
