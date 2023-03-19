import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InterfaceLayerRoutingModule } from './interface-layer-routing.module';

import { InterfaceLayerComponent } from './interface-layer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { AddTasksComponent } from './add-tasks/add-tasks.component';
import { UpdateTasksComponent } from './update-tasks/update-tasks.component';
import { RemoveTasksComponent } from './remove-tasks/remove-tasks.component';

@NgModule({
  declarations: [
    InterfaceLayerComponent,
    NavbarComponent,
    HomeComponent,
    TasksListComponent,
    AddTasksComponent,
    UpdateTasksComponent,
    RemoveTasksComponent,
    InterfaceLayerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    InterfaceLayerRoutingModule,
  ],
  exports: [
    InterfaceLayerComponent,
    NavbarComponent,
    HomeComponent,
    TasksListComponent,
    AddTasksComponent,
    UpdateTasksComponent,
    RemoveTasksComponent
  ]
})
export class InterfaceLayerModule { }
