import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = 'http://localhost:8080/students'; 
  private tokenKey = 'jwtToken';

  constructor(private http: HttpClient) { }

 
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.authUrl, { username, password });
  }

  
  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token); 
  }

  
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  
  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  
  getHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      Authorization: `Bearer ${token}` 
    });
  }
}
