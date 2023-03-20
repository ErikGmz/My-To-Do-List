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

  getTasksList(): Task[] {
    return this.tasksList;
  }

  getTaskByID(taskID: number) {
    return this.tasksList[taskID];
  }

  addNewTask(newTask: Task) {
    this.tasksList.push(newTask);
    this.setLocalStorageValue();
  }

  updateTask(newTaskData: Task) {
    let updatedTaskIndex: number = this.tasksList.findIndex((task) => {
      task.taskID === newTaskData.taskID;
    });

    this.tasksList[updatedTaskIndex] = newTaskData;
    this.setLocalStorageValue();
  }

  removeTask(taskID: number) {
    let deletedTaskIndex: number = this.tasksList.findIndex((task) => {
      task.taskID === taskID;
    });

    this.tasksList.splice(deletedTaskIndex, 1);
    this.setLocalStorageValue();
  }
}
