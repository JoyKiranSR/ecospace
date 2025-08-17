import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:7000'; // Base URL for the API

  constructor(private http: HttpClient) { }

  get<T>(endpoint: string, params?: Record<string, any>): Observable<T> {
    const httpParams = new HttpParams({ fromObject: params || {} });
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`, { params: httpParams });
  }
}
