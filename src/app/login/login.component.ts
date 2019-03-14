import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginPageComponent {

    name: string;
    password: string;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }


    login(): void {
        console.log(`${this.name} : ${this.password}`);
        this.authService.login({name: this.name, password: this.password}).subscribe(user => {
            this.router.navigate(['/about']);
        });
    }
}
