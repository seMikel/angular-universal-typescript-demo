import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';
import { concatMap } from 'rxjs/operators';
import { User } from '../interfaces/user.interface';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

    private tokenKey = 'token';

    constructor(private http: HttpClient, private storage: StorageService, private userService: UserService) {
    }

    public getToken(): string {
        return this.storage.getString(this.tokenKey);
    }

    public login({name, password}): Observable<User> {
        return this.http.post<string>(`http://10.0.2.2:3000/users/login`, {name, password}).pipe(
            concatMap(token => {
                this.storage.setString(this.tokenKey, token);
                return this.userService.getUserData();
            })
        );
    }

    public logout() {
        this.storage.setString(this.tokenKey, '');
        this.userService.clearUserData();
    }
}
