import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istudent } from 'src/app/models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  @Input() getstdinfo!: Istudent[]
  @Output() remove: EventEmitter<string> = new EventEmitter()
  @Output() edit: EventEmitter<Istudent> = new EventEmitter()

  constructor() { }

  ngOnInit(): void { }

  onRemove(stdid: string) {
    this.remove.emit(stdid)
  }

  onEdit(std: Istudent) {
    this.edit.emit(std)
  }
}
