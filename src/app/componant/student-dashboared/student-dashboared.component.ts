import { Component, OnInit } from '@angular/core';
import { Istudent } from 'src/app/models/student';

@Component({
  selector: 'app-student-dashboared',
  templateUrl: './student-dashboared.component.html',
  styleUrls: ['./student-dashboared.component.scss'],
})
export class StudentDashboaredComponent implements OnInit {
  stdlist: Istudent[] = [
    { fname: 'Tony', lname: 'Parker', nickname: 'Iroman', email: 'tony@gmail.com', contact: 1234567890, stdid: '123' },
    { fname: 'Steve', lname: 'Rogers', nickname: 'Captain', email: 'steve@gmail.com', contact: 9876543210, stdid: '124' }
  ];

  selectedStudent: Istudent | null = null;

  constructor() {}

  ngOnInit(): void {}


  getnewstd(std: Istudent) {
    if (this.selectedStudent) {
      const index = this.stdlist.findIndex(s => s.stdid === this.selectedStudent!.stdid);
      if (index > -1) {
        this.stdlist[index] = { ...std }; 
      }
      this.selectedStudent = null; 
    } else {
      this.stdlist.unshift({ ...std }); 
    }
  }


  removeStudent(stdid: string) {
    this.stdlist = this.stdlist.filter(s => s.stdid !== stdid);
  }

  
  editStudent(std: Istudent) {
    this.selectedStudent = { ...std };
  }
}
