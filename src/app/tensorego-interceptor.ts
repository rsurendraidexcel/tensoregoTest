import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TensorGoService } from './tensor-go.service';
@Injectable()
export class TensoregoInterceptor implements HttpInterceptor {

  constructor(private loginService: TensorGoService) {}

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
    let newHeaders = httpRequest.headers;
    const token = this.loginService.getTokenTensorGo();

    if(token){
      newHeaders= newHeaders.append('Authorization', token);
    }
    const authReq = httpRequest.clone({headers: newHeaders});
    return next.handle(authReq);
  }

}