import { BasicService } from './basic.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService extends BasicService {
  constructor(private httpClient: HttpClient) {
    super();
  }

  getUserInfo(): Observable<UserModel> {
    const headers = this.createHeaders();
    return this.httpClient.get<UserModel>(`${environment.apiUrl}api/v1/user`, { headers: headers });
  }

  updateUserInfo(model: UserModel): Observable<UserModel> {
    const headers = this.createHeaders();
    return this.httpClient.put<UserModel>(`${environment.apiUrl}api/v1/user`, model, { headers: headers });
  }
}
