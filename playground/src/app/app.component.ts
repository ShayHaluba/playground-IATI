import { Component } from '@angular/core';
import { StudentService } from './services/student/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(
    private _studentService: StudentService) {
    }
  getStudentName() {
    return this._studentService.getLoggedInStudentName();
  }
}
