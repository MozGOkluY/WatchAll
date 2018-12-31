import { ShowModel } from './../models/show.model';
import { BasicService } from './basic.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShowService extends BasicService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  getFiltered(name: string): Observable<ShowModel[]> {
    return this.httpClient.get<ShowModel[]>(`${environment.apiUrl}api/v1/shows/find?name=${name}&count=5`);
  }

  getShowById(id: string): Observable<ShowModel> {
    return this.httpClient.get<ShowModel>(`${environment.apiUrl}api/v1/shows/${id}`);
  }
}
