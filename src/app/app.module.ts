import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StudentDashboaredComponent } from './componant/student-dashboared/student-dashboared.component';
import { StudentFormComponent } from './componant/student-form/student-form.component';
import { StudentListComponent } from './componant/student-list/student-list.component';
import { TodoDashboardComponent } from './componant/todo-dashboard/todo-dashboard.component';
import { TodoFormComponent } from './componant/todo-form/todo-form.component';
import { TodoListComponent } from './componant/todo-list/todo-list.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    StudentDashboaredComponent,
    StudentFormComponent,
    StudentListComponent,
    TodoDashboardComponent,
    TodoFormComponent,
    TodoListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
