import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get401(){
    return this.http.get('https://httpstat.us/401');
  }

  get503(){
    return this.http.get('https://httpstat.us/503');
  }
}
