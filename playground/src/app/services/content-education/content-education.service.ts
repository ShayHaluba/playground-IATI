import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import { ContentEducation } from '../../models/content-education/content-education';

@Injectable()
export class ContentEducationService {
  private _serverUrl = 'https://playgrounddb-7648.restdb.io';
  private _headers: Headers;
  private _opts: RequestOptions;

  private skillList: any[];

  constructor(private _http: Http) {
    this._headers = new Headers({
      'Content-Type': 'application/json',
      'x-apikey': '5ab253acf0a7555103cea64a',
    });
    this._opts = new RequestOptions();
    this._opts.headers = this._headers;
  }

  public getContentEducations(): Promise<ContentEducation[]> {
    return this._http.get(this._serverUrl + '/rest/content-education', this._opts).map(response => {
      const responseJson = response.json();
      console.log(responseJson);
      return responseJson;
    }).toPromise();
  }


  public getSkills(): Promise<any[]> {
    if (this.skillList) {
      return Promise.resolve(this.skillList);
    }
    else {
      return this._http.get(this._serverUrl + '/rest/skills', this._opts).map(response => {
        const responseJson = response.json();
        console.log(responseJson);
        this.skillList = responseJson;
        return responseJson;
      }).toPromise();
    }
  }
}
