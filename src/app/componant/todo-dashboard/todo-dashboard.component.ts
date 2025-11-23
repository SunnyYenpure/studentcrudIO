import { Component, OnInit } from '@angular/core';
import { Itodo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss'],
})
export class TodoDashboardComponent implements OnInit {
  todoarray: Itodo[] = [
    { todoitem: 'Javascript', todoid: '123' },
    { todoitem: 'Typescript', todoid: '124' },
  ];

  edittodo!: Itodo | null;

  constructor() {}

  ngOnInit(): void {}

  // Add or Update
  getnewtodo(todo: Itodo) {
    if (this.edittodo) {
      const index = this.todoarray.findIndex(t => t.todoid === this.edittodo!.todoid);
      if (index > -1) {
        this.todoarray[index] = { ...todo };
      }
      this.edittodo = null;
    } else {
      this.todoarray.unshift(todo);
    }
  }

  // Remove
  getremoveId(removeId: string) {
    this.todoarray = this.todoarray.filter(t => t.todoid !== removeId);
  }

  // Edit
  getedittodo(todo: Itodo) {
    this.edittodo = { ...todo };
  }
}
