import { Component, OnInit } from '@angular/core';
import { CrudOperations } from '../CrudOperations.model';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {
  confirmFormSubmitAlert = {
    title: "New task addition confirmation",
    text: "Do you want to add this task to your My-To-Do List?",
  };
  formSubmitAlertMessage = {
    title: "Successfully added new task!",
    text: "You can check it now in your My-To-Do List.",
  };
  submitButtonText: string = "Add New Task";
  crudOperation = CrudOperations.ADD;

  constructor() { }

  ngOnInit(): void {
  }

}
