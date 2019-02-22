import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { tap } from 'rxjs/operators';
import { Purchase } from '../interfaces/purchase.interface';

@Injectable()
export class UserService {

    public user = new BehaviorSubject<User>(null);

    constructor(private http: HttpClient) { }

    public getUserData(): Observable<User> {
        return this.http.get<User>('http://localhost:3000/users/user').pipe(
            tap(user => this.user.next(user))
        );
    }

    public setUserData(data: Partial<User>): Observable<User> {
        return this.http.put<User>('http://localhost:3000/users/user', data).pipe(
            tap(user => this.user.next(user))
        );
    }

    public setUserPurchases(purchases: Purchase[]): Observable<User> {
        return this.http.put<User>('http://localhost:3000/users/purchases', purchases).pipe(
            tap(user => this.user.next(user))
        );
    }

    public clearUserData() {
        this.user.next(null);
    }
}
