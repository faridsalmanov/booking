import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptorService {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let token: string = this.userS.token;
    if (token == '') { } else {

      request = request.clone(

        {
          setHeaders: {
            Authorization: token
          }

        }

      );
    }
    return next.handle(request);
  }

  constructor(private userS: UserService) { }
}


