import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InterfaceLayerModule } from './interface-layer/interface-layer.module';
import { LogicLayerModule } from './logic-layer/logic-layer.module';
import { DataLayerModule } from './data-layer/data-layer.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    InterfaceLayerModule,
    LogicLayerModule,
    DataLayerModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
