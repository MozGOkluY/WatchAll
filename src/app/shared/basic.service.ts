import { throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';

export class BasicService {
    private tokenKey = 'jwt-token';

    constructor() { }

    isJwtValid(): boolean {
        let result = false;
        const expiryDate = this.getExpiryDate();

        if (expiryDate) {
            const currentTime = new Date().getTime() / 1000;
            result = (currentTime < expiryDate);
        }

        return result;
    }

    getUserRole(): string {
        let result = '';
        const token = this.getAuthToken();

        if (token.length > 0) {
            const jwt = this.getDecodedJwt();
            result = jwt['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
        }

        console.log('Parsed roles are: ', result);
        return result;
    }

    getExpiryDate(): number {
        const token = this.getAuthToken();

        if (token.length > 0) {
            const jwt = this.getDecodedJwt();
            return jwt.exp;
        }

        return null;
    }

    getDecodedJwt(): any {
        const token = this.getAuthToken();

        if (token.length === 0) {
            return null;
        }

        try {
            const jwt = jwt_decode(token);
            return jwt;
        } catch (Error) {
            return null;
        }
    }

    getAuthToken(): string {
        let result = localStorage.getItem(this.tokenKey);
        if (!result) {
            result = '';
        }
        return result;
    }

    storeNewToken(token: string) {
        this.removeToken();
        localStorage.setItem(this.tokenKey, token);
    }

    removeToken() {
        localStorage.removeItem(this.tokenKey);
    }

    handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage: string;

        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            switch (err.status) {
                case 0:
                    errorMessage = err.error ? err.error : 'Server is not avalible';
                    break;

                case 400:
                    errorMessage = err.error ? err.error : 'Message_BadRequest';
                    break;

                case 401:
                    errorMessage = err.error ? err.error : 'Message_Unauthorized';
                    break;

                case 403:
                    errorMessage = err.error ? err.error : 'Message_Forbidden';
                    break;

                case 500:
                case 501:
                case 502:
                case 503:
                case 504:
                case 505:
                case 506:
                case 507:
                case 508:
                case 509:
                case 510:
                case 511:
                    errorMessage = err.error ? err.error : 'ErrorMessage_ServerError';
                    break;

                default:
                    // The backend returned an unsuccessful response code.
                    // The response body may contain clues as to what went wrong,
                    errorMessage = `Backend returned code ${err.status}`;
            }
        }

        return throwError(errorMessage);
    }

    createHeaders(): HttpHeaders {
        const token = this.getAuthToken();
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('Accept', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + token);

        return headers;
    }
}
