import { Observable, Subject } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Task } from '../../data-layer/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  localStorageKey: string = "tasksList";
  storageStatus = new Subject<string>();
  tasksList: Task[] = this.getLocalStorageValue() || [];

  constructor(@Inject(LOCAL_STORAGE) public localStorage: StorageService) { 
    this.setLocalStorageValue();

    this.observeStorage().subscribe(() => {
      this.tasksList = this.getLocalStorageValue();
    })
  }

  observeStorage(): Observable<any> {
    return this.storageStatus.asObservable();
  }

  setLocalStorageValue() {
    this.localStorage.set(this.localStorageKey, this.tasksList);
    this.storageStatus.next("changed");
  }

  getLocalStorageValue() {
    return this.localStorage.get(this.localStorageKey);
  }

  getTaskByID(taskID: number): Task {
    let foundTask: Task = new Task(-1, "", "", "", "", -1);

    this.tasksList.forEach((task) => {
      if(task.taskID == taskID) {
        foundTask = task;
        return;
      }
    });

    return foundTask;
  }

  addNewTask(newTask: Task) {
    this.tasksList.push(newTask);
    this.setLocalStorageValue();
  }

  updateTask(newTaskData: Task) {
    let taskIndex = -1;

    this.tasksList.forEach((task, index) => {
      if(task.taskID == newTaskData.taskID) {
        taskIndex = index;
        return;
      }
    });

    if(taskIndex != -1) {
      this.tasksList[taskIndex] = newTaskData;
      this.setLocalStorageValue();
    }
  }

  removeTask(taskID: number) {
    let taskIndex = -1;

    this.tasksList.forEach((task, index) => {
      if(task.taskID == taskID) {
        taskIndex = index;
        return;
      }
    });

    if(taskIndex != -1) {
      this.tasksList.splice(taskIndex, 1);
      this.setLocalStorageValue();
    }
  }
}
