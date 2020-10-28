import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../common/student.interface';

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html'
  })
export class StudentComponent {
    @Input() student: Student
    @Output() studentName = new EventEmitter<string>()

    showName(): void {
        this.studentName.emit(this.student.name);
    }
}