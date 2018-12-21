import { BasicService } from './basic.service';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService extends BasicService {
    redirectUrl: string;
    notificationMessage = '';

    constructor(private http: HttpClient) {
        super();
    }

    isLoggedIn(): boolean {
        return this.isJwtValid();
    }

    isAdmin(): boolean {
        const role = this.getUserRole();
        return role === 'admin';
    }

    isModerator(): boolean {
        const role = this.getUserRole();
        return role === 'moderator';
    }

    loginUser(userName: string, password: string): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const url = environment.apiUrl + 'api/v1/tokens/login';
        const body = {
            'username': userName,
            'password': password
        };
        return this.http.post(url, body, { headers: headers })
            .pipe(
                map((b: any) => {
                    this.storeNewToken(b.token);

                    return {
                        token: b,
                        statusCode: 200,
                    };
                }),
                catchError(err => {
                    if (err instanceof HttpErrorResponse) {
                        this.handleError(err);
                        return of({
                            token: '',
                            statusCode: err.status,
                        });
                    }

                    this.handleError(err);
                    return of(null);
                })
            );
    }

    logout(): void {
        this.removeToken();
    }
}
