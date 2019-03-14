import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { tap } from 'rxjs/operators';
import { Purchase } from '../interfaces/purchase.interface';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

    public user = new BehaviorSubject<User>(null);

    constructor(private http: HttpClient) { }

    public getUserData(): Observable<User> {
        return this.http.get<User>(`${environment.apiBaseURL}/users/user`).pipe(
            tap(user => this.user.next(user))
        );
    }

    public setUserData(data: Partial<User>): Observable<User> {
        return this.http.put<User>(`${environment.apiBaseURL}/users/user`, data).pipe(
            tap(user => this.user.next(user))
        );
    }

    public setUserPurchases(purchases: Purchase[]): Observable<User> {
        return this.http.put<User>(`${environment.apiBaseURL}/users/purchases`, purchases).pipe(
            tap(user => this.user.next(user))
        );
    }

    public clearUserData() {
        this.user.next(null);
    }
}
