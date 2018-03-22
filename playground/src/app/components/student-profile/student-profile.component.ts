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
}
