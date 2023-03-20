import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataLayerModule } from '../data-layer/data-layer.module';
import { TasksService } from './services/tasks.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DataLayerModule
  ],
  providers: [
    TasksService
  ]
})
export class LogicLayerModule { }
