import { Component, OnInit } from '@angular/core';
import { Student } from '../common/student.interface';
import { StudentService } from '../common/student.service';

@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html'
  })
export class StudentListComponent implements OnInit{
    students: Student[]
    selected: string

    constructor(private studentService: StudentService) {
    }

    ngOnInit(): void {
        this.students = this.studentService.getStudentList()
    }

    select(name: string): void {
        this.selected = name;
    }
}