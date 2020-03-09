import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    let result: boolean = false;
    let token: string = this.userService.token;

    if (token === '') {
      result = false;
      this.router.navigate(['login']);

    } else {
      result = true;

    }


    return result;

  }
  constructor(private router: Router, private userService: UserService) { }



}
