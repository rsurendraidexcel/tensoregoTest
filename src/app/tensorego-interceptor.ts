import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { TensorGoService } from './tensor-go.service';
import { retry, catchError } from 'rxjs/operators';
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

    return next.handle(authReq)
    .pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        let errorMessage='';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Errors:${error.error.message}`;
        } else {
          errorMessage = `Error Code : ${error.status} \n  Message: ${error.message}`;
        }
        alert(errorMessage);
        return throwError(errorMessage)
      })
    )
  }
  
}