import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:7000'; // Base URL for the API

  constructor(private http: HttpClient) { }

  get<ApiResponse>(endpoint: string, params?: Record<string, any>): Observable<ApiResponse> {
    const httpParams = new HttpParams({ fromObject: params || {} });
    return this.http.get<ApiResponse>(`${this.baseUrl}/${endpoint}`, { params: httpParams });
  }
}
