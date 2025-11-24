import { Component, EventEmitter, Input, OnInit, Output, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istudent } from 'src/app/models/student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit, OnChanges {
  @ViewChild('studentform') studentform!: NgForm
  @Output() emitnewstd: EventEmitter<Istudent> = new EventEmitter<Istudent>()
  @Input() selectedStudent: Istudent | null = null;

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedStudent'] && this.selectedStudent && this.studentform) {
      this.studentform.form.patchValue({
        fname: this.selectedStudent.fname,
        lname: this.selectedStudent.lname,  
        nickname: this.selectedStudent.nickname,
        email: this.selectedStudent.email,
        contact: this.selectedStudent.contact
      });
    }
  }

  onstudentAdd() {
    if (!this.studentform.valid) return;

    const newstd: Istudent = {
      ...this.studentform.value,
      // stdid: this.selectedStudent ? this.selectedStudent.stdid : this.uuid()
      stdid:this.uuid()
    };

    this.emitnewstd.emit(newstd);
    this.studentform.reset();
  }

  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0,
        v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
