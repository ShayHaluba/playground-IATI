import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Student } from '../../models/student/student';

@Injectable()
export class StudentService {

  // Http global variables
  private _serverUrl = "https://playgrounddb-7648.restdb.io/rest/student";
  private _headers: Headers;
  private _opts: RequestOptions;

  // App Data Model
  public _students: Student[];
  private _loggedInStudent: Student;

  constructor(private _http: Http) {
    this._headers = new Headers({
      'Content-Type': 'application/json',
      'x-apikey': '5ab253acf0a7555103cea64a',
    });
    this._opts = new RequestOptions();
    this._opts.headers = this._headers;
  }

  public getStudents() {
    //if (!this._students) {
      return this._http.get(this._serverUrl, this._opts).toPromise()
        .then(res => {
          let body = res.json() as Student[];
          this._students = body;
          return body;
        })
        .catch(this.handleErrorPromise);
    // }else {
    //   return this._students;
    // }
  }

  updateStudent(student: Student) {
    return this._http.post(this._serverUrl, JSON.stringify(student), { headers: this._headers })
      .toPromise()
      .then(res => {
        let body = res.json() as Student;
        return body;
      })
      .catch(this.handleErrorPromise);

  }

  public setStudent(stud: Student) {
    this._loggedInStudent = stud;
  }

  public getLoggedInStudentName(): string {
    return this._loggedInStudent ? this._loggedInStudent.name : undefined;
  }

  public getLoggedInStudent(): Student {
    return this._loggedInStudent;
  }

  private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
}
