import { BasicService } from './basic.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService extends BasicService {
  private apiUrl = 'http://localhost:6001/api/v1/';

  constructor(private httpClient: HttpClient) {
    super();
  }

  getUserInfo(): Observable<UserModel> {
    const headers = this.createHeaders();
    return this.httpClient.get<UserModel>(`${this.apiUrl}user`, { headers: headers });
  }

  updateUserInfo(model: UserModel): Observable<UserModel> {
    const headers = this.createHeaders();
    return this.httpClient.put<UserModel>(`${this.apiUrl}user`, model, { headers: headers });
  }
}
