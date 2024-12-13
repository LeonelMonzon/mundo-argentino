import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api/product'; 

  constructor(private http: HttpClient) {}

  getProduct(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
