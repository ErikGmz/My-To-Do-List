import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LogicLayerModule } from '../logic-layer/logic-layer.module';
import { InterfaceLayerRoutingModule } from './interface-layer-routing.module';

import { InterfaceLayerComponent } from './interface-layer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { AddTasksComponent } from './components/add-tasks/add-tasks.component';
import { UpdateTasksComponent } from './components/update-tasks/update-tasks.component';
import { RemoveTasksComponent } from './components/remove-tasks/remove-tasks.component';
import { FormStructureComponent } from './components/form-structure/form-structure.component';

import { PriorityFormatPipe } from './pipes/priority-format/priority-format.pipe';
import { TwelveHoursFormatPipe } from './pipes/twelve-hours-format/twelve-hours-format.pipe';
import { SearchTaskComponent } from './components/search-task/search-task.component';

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
    TwelveHoursFormatPipe,
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
    RemoveTasksComponent,
    InterfaceLayerComponent,
    FormStructureComponent,
    PriorityFormatPipe,
    TwelveHoursFormatPipe,
    SearchTaskComponent
  ]
})
export class InterfaceLayerModule { }
