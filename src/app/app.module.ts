import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import {FormsModule} from '@angular/forms';
import { ArraysComponent } from './component/arrays/arrays.component';
import { StudentListComponent } from './component/student-list/student-list.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatDialogModule, MatProgressSpinnerModule, MatButtonModule }
from '@angular/material';
import { AddTodoComponent } from './component/add-todo/add-todo.component';
import { AgGridModule } from 'ag-grid-angular';
import {HttpClientModule} from '@angular/common/http';

@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    ArraysComponent,
    StudentListComponent,
    TodoListComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule, 
    MatDialogModule, 
    MatProgressSpinnerModule, 
    MatButtonModule,
    AgGridModule.withComponents([]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AddTodoComponent]
})
export class AppModule { }
