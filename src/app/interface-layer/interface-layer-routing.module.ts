import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { AddTasksComponent } from './add-tasks/add-tasks.component';
import { UpdateTasksComponent } from './update-tasks/update-tasks.component';
import { RemoveTasksComponent } from './remove-tasks/remove-tasks.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "my-to-do-list", component: TasksListComponent},
  {path: "add-tasks", component: AddTasksComponent},
  {path: "update-tasks", component: UpdateTasksComponent},
  {path: "remove-tasks", component: RemoveTasksComponent}
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class InterfaceLayerRoutingModule { }
