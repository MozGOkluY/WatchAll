import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  private apiUrl = 'http://localhost:6001/api/v1/';
  constructor(private httpClient: HttpClient) { }

  getTop100(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}shows/top100`);
  }
}
