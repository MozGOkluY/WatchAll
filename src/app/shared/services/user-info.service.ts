import { BasicService } from './basic.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService extends BasicService {
  private apiUrl = 'http://localhost:6001/api/v1/';

  constructor(private httpClient: HttpClient) {
    super();
  }

  getUserInfo(): Observable<any> {
    const headers = this.createHeaders();
    return this.httpClient.get(`${this.apiUrl}user`, { headers: headers });
  }
}
