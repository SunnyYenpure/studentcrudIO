import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() todos!: Itodo[];
  @Output() emitremoveid = new EventEmitter<string>();
  @Output() emitedittodo = new EventEmitter<Itodo>();

  constructor() {}

  ngOnInit(): void {}

  ontodoremove(id: string) {
    this.emitremoveid.emit(id);
  }

  onedit(todo: Itodo) {
    this.emitedittodo.emit(todo);
  }
}
