import { Component, OnInit } from '@angular/core';
import { CrudOperations } from '../../models/CrudOperations.model';

@Component({
  selector: 'app-remove-tasks',
  templateUrl: './remove-tasks.component.html',
  styleUrls: ['./remove-tasks.component.css']
})
export class RemoveTasksComponent implements OnInit {
  tasksListNotFoundMessage = "The My-To-Do list is currently empty, so there's not any task to remove.";
  confirmFormSubmitAlert = {
    title: "Task removal confirmation",
    text: "Do you want to remove this from your My-To-Do List?",
  };
  formSubmitAlertMessage = {
    title: "Successfully removed new task!",
    text: "You can check the changes now in your My-To-Do List.",
  };
  submitButtonText: string = "Remove Task";
  crudOperation = CrudOperations.DELETE;
  readonlyForm = true;

  constructor() { }

  ngOnInit(): void {
  }

}
