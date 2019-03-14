import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { PlatformService } from '../services/platform.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private platform: PlatformService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.getToken()) {
        return true;
    }
    this.platform.isMobile ? this.router.navigate(['/login']) : this.router.navigate(['']);
    return false;
  }
}
