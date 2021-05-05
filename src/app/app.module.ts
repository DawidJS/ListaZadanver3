import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ToDOTaskComponent } from './to-dotask/to-dotask.component';
import { FormsModule } from '@angular/forms';
import { DoneTaskComponent } from './done-task/done-task.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ToDOTaskComponent,
    DoneTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
