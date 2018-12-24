import { BasicService } from './basic.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowService extends BasicService {
  private apiUrl = 'http://localhost:6001/api/v1/';

  constructor(private httpClient: HttpClient) {
    super();
  }

  getFiltered(name: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}shows/find?name=${name}`);
  }

  getShowById(id: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}shows/${id}`);
  }
}
