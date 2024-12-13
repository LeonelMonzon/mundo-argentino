import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetodopagoService {
private baseUrl = 'http://localhost:8080/api/paymentMethod'; 

  constructor(private http: HttpClient) {}

  getPaymentMethod(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
