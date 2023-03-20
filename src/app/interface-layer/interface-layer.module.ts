import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LogicLayerModule } from '../logic-layer/logic-layer.module';
import { InterfaceLayerRoutingModule } from './interface-layer-routing.module';

import { InterfaceLayerComponent } from './interface-layer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { AddTasksComponent } from './add-tasks/add-tasks.component';
import { UpdateTasksComponent } from './update-tasks/update-tasks.component';
import { RemoveTasksComponent } from './remove-tasks/remove-tasks.component';
import { FormStructureComponent } from './form-structure/form-structure.component';

import { PriorityFormatPipe } from './pipes/priority-format.pipe';
import { SearchTaskComponent } from './search-task/search-task.component';

@NgModule({
  declarations: [
    InterfaceLayerComponent,
    NavbarComponent,
    HomeComponent,
    TasksListComponent,
    AddTasksComponent,
    UpdateTasksComponent,
    RemoveTasksComponent,
    InterfaceLayerComponent,
    FormStructureComponent,
    PriorityFormatPipe,
    SearchTaskComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    InterfaceLayerRoutingModule,
    LogicLayerModule
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
