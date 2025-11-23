import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  ViewChild,
  OnChanges,
  AfterViewInit
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnChanges, AfterViewInit {

  @Output() emittodo = new EventEmitter<Itodo>();
  @Input() getedittodo!: Itodo | null;
  @ViewChild('todoform') todoform!: NgForm;

  isineditmode: boolean = false;

  ngAfterViewInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['getedittodo'] && this.getedittodo) {
      this.isineditmode = true;

   
      setTimeout(() => {
        this.todoform.form.patchValue({
          todoitem: this.getedittodo!.todoitem
        });
      });
    }
  }

  ontodoadd() {
    const todoobj: Itodo = {
      ...this.todoform.value,
      todoid: this.getedittodo ? this.getedittodo.todoid : this.uuid()
    };

    this.emittodo.emit(todoobj);
    this.todoform.reset();
    this.isineditmode = false;
  }

  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
