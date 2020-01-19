import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  baseURL = 'http://127.0.0.1:5000/';
  constructor(private http: HttpClient) { }

  getData(url) {
    return this.http.get(this.baseURL + url);
  }

}
