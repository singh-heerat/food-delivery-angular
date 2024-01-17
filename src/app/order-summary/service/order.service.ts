import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {  K8ExternalIp } from '../../constants/url';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  private apiUrl = K8ExternalIp+'/order/saveOrder';

  constructor(private http: HttpClient) { }

 httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'text/plain',
      'Access-Control-Allow-Origin': K8ExternalIp // Replace with your Angular app URL
    })
  };

  saveOrder(data: any):Observable<any>  {
    return this.http.post<any>(this.apiUrl, data);
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error.message || error);
  }


}