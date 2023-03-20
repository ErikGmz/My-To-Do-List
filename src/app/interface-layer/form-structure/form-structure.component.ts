import { formatDate } from '@angular/common';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudOperations } from '../CrudOperations.model';
import Swal from 'sweetalert2';
import { TasksService } from 'src/app/logic-layer/services/tasks.service';
import { Task } from 'src/app/data-layer/task.model';

@Component({
  selector: 'app-form-structure',
  templateUrl: './form-structure.component.html',
  styleUrls: ['./form-structure.component.css']
})
export class FormStructureComponent implements OnInit {
  taskForm = new FormGroup({
    taskTitle: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(150)]),
    taskDescription: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]),
    taskDate: new FormControl(formatDate(new Date(Date.now()), "yyyy-MM-dd", "en"), Validators.required),
    taskTime: new FormControl(formatDate(new Date(Date.now()), "HH:mm", "en"), Validators.required),
    taskPriority: new FormControl("1", [Validators.required])
  });
  @Input() confirmFormSubmitAlert: any;
  @Input() formSubmitAlertMessage: any;
  @Input() submitButtonText: string = "";

  @Input() crudOperation = CrudOperations.ADD;
  @Input() readonlyForm = false;
  @Input() taskData = new Task(-1, "", "", "", "", -1);

  constructor(public tasksService: TasksService) {
  }

  ngOnInit(): void {
    if(this.readonlyForm) {
      this.disableFormControls();
    }

    if(this.taskData.taskID != -1) {
      this.loadFormData();
    }
  }

  ngOnChanges(formChanges: SimpleChanges) {
    if(formChanges['taskData']) {
      this.loadFormData();
    }
  }

  onSubmit() {
    this.taskForm.markAllAsTouched();

    if(this.taskForm.invalid) {
      return;
    }
    else {
      Swal.fire({
        title: this.confirmFormSubmitAlert.title,
        text: this.confirmFormSubmitAlert.text,
        icon: "question",
        confirmButtonText: "Yes",
        showDenyButton: true,
        denyButtonText: "No"
      })
      .then((response) => {
        if(response.isConfirmed) {
          switch(this.crudOperation) {
            case CrudOperations.ADD: {
              let newTask = new Task(this.tasksService.tasksList.length + 1, this.taskForm.controls.taskTitle.value || "", this.taskForm.controls.taskDescription.value || "",
              this.taskForm.controls.taskDate.value || "", this.taskForm.controls.taskTime.value || "", Number(this.taskForm.controls.taskPriority.value));
              this.tasksService.addNewTask(newTask);
              break;
            }

            case CrudOperations.UPDATE: {
              let newTaskData = new Task(this.taskData.taskID, this.taskForm.controls.taskTitle.value || "", this.taskForm.controls.taskDescription.value || "",
              this.taskForm.controls.taskDate.value || "", this.taskForm.controls.taskTime.value || "", Number(this.taskForm.controls.taskPriority.value));
              this.taskData = newTaskData;
              this.tasksService.updateTask(newTaskData);
              break;
            }

            case CrudOperations.DELETE: {
              this.tasksService.removeTask(this.taskData.taskID);
              break;
            }
          }

          Swal.fire({
            title: this.formSubmitAlertMessage.title,
            text: this.formSubmitAlertMessage.text,
            icon: "success"
          })
          .then(() => {
            switch(this.crudOperation) {
              case CrudOperations.ADD: {
                this.taskForm.reset();
                this.taskForm.get('taskDate')?.setValue(formatDate(new Date(Date.now()), "yyyy-MM-dd", "en"));
                this.taskForm.get('taskTime')?.setValue(formatDate(new Date(Date.now()), "HH:mm", "en"));
                this.taskForm.get('taskPriority')?.setValue("1");
                break;
              }

              case CrudOperations.UPDATE: {
                this.taskForm.reset();
                this.loadFormData();
                break;
              }
  
              case CrudOperations.DELETE: {
                window.location.reload();
                break;
              }
            }
          });
        }
      })
    }
  }

  disableFormControls() {
    this.taskForm.get('taskTitle')?.disable();
    this.taskForm.get('taskDescription')?.disable();
    this.taskForm.get('taskDate')?.disable();
    this.taskForm.get('taskTime')?.disable();
    this.taskForm.get('taskPriority')?.disable();
  }

  loadFormData() {
    this.taskForm.get('taskTitle')?.setValue(this.taskData.taskTitle);
    this.taskForm.get('taskDescription')?.setValue(this.taskData.taskDescription);
    this.taskForm.get('taskDate')?.setValue(this.taskData.taskDate);
    this.taskForm.get('taskTime')?.setValue(this.taskData.taskTime);
    this.taskForm.get('taskPriority')?.setValue(String(this.taskData.taskPriority));
  }
}
