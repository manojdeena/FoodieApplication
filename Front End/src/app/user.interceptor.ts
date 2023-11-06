import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const localToken=localStorage.getItem('token');
    console.log("token value"+localToken);
    request=request.clone({headers:request.headers.set('Authorization','Bearer '+localToken)})
    console.log("token"+localToken)
    console.log(request)
    return next.handle(request);
  }
}
