import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashboaredComponent } from './student-dashboared.component';

describe('StudentDashboaredComponent', () => {
  let component: StudentDashboaredComponent;
  let fixture: ComponentFixture<StudentDashboaredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDashboaredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDashboaredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
