import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student/student.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  constructor(private _studentService: StudentService) { }

  ngOnInit() {

  }

  testsStudents():Promise<any> {
    return this._studentService.getStudents();
  }


  testUpdateStudent(){
    let students = this.testsStudents().then(students =>{
      this._studentService.updateStudent(students[0]);
    });
  }
}
