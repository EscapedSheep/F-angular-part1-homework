import { Injectable } from '@angular/core';
import { Student } from '../common/student.interface';

@Injectable({
    providedIn: 'root'
  })
  export class StudentService {
  
    constructor() { }

    getStudentList(): Student[] {
        return [{ id: 1, name: "Student 1", age: 1},
                { id: 2, name: "Student 2", age: 2 },
                { id: 3, name: "Student 3", age: 3}]
    }
  }