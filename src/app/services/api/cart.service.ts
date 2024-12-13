import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private baseUrl = 'http://localhost:8080/api/cart'; 

  constructor(private http: HttpClient) {}

  getCarts(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  postCart(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }

}
