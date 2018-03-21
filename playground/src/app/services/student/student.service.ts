import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StudentService {

  private _serverUrl = "https://playgrounddb-7648.restdb.io";
  private _headers: Headers;
  private _opts: RequestOptions;

  constructor(private _http: Http) {
    this._headers = new Headers({
      'Content-Type': 'application/json',
      'x-apikey': '106d35afd80afa2bd431e44b0cc0a8321f89b',
      // 'Access-Control-Allow-Origin': '*'
      // 'Cache-Control': 'no-cache'
    });
    this._opts = new RequestOptions();
    this._opts.headers = this._headers;
  }

  public getStudent() {

    return this._http.get(this._serverUrl + "/rest/student", this._opts).map(response => {
      let responseJson = response.json();
      console.log(responseJson);
    }).toPromise();

    // return this._http.get(this._serverUrl + "/rest/student", { headers: this._headers })
    //   .map(response => {
    //     let responseJson = response.json();
    //     console.log(responseJson);
    //   }).toPromise();
  }

  createStudent(name: string, age: number, classroon: string) {


  }

}
