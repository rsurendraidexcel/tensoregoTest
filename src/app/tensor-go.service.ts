import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TensorGoService {

  constructor( private httpClient: HttpClient) { }

  /*Get sevice*/
   getTensorGoUser(url: string): Observable<any> {
      const httpOptions = {
        headers: this.requestHeaders()
      };
      return this.httpClient.get(url, httpOptions);
    }
  
    /*Put service*/

  putTensorGoUser(url, model):Observable<any> {
    const httpOptions = {
      headers: this.requestHeaders()
    };
    return this.httpClient.patch(url, model, httpOptions);
  }


  requestHeaders(): HttpHeaders {
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Headers', 'access-control-allow-headers,access-control-allow-origin');
    return headers;
  }

  getTokenTensorGo(): string {
     let tokentString: string = `Bearer c84d0b8e49467025ccf4ee19d4ba37d59e506cf0f03e48802c56c6b1be6a4d61`;
    return tokentString;
  }
}
