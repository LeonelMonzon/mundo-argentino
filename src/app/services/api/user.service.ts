import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/users'; 

  constructor(private http: HttpClient) {}

  getUsers(email:string): Observable<any> {
    return this.http.get(`${this.baseUrl}/email/${email}`);
  }

  postUser(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  putUser(data: any, id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/${id}`, data);
  }
}
