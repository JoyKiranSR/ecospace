import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';

import { ApiPagination, ApiResponse, ApiSuccessResponse } from '../../../models/api.model';
import { toCamelCase } from '../../utils/api-utility';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:7000'; // Base URL for the API

  constructor(private http: HttpClient) { }

  /**
   * Generic GET request method
   * @param endpoint - The API endpoint to call
   * @param params - Optional query parameters
   * @returns Observable of the API response
   */
  get<T>(endpoint: string, params?: Record<string, any>): Observable<ApiSuccessResponse<T>> {
    const url = `${this.baseUrl}/${endpoint}`;
    const httpParams = new HttpParams({ fromObject: params ?? {} });
    return this.http.get<ApiResponse<T>>(url, { params: httpParams })
      .pipe(
        // Handle any additional transformations or error handling here if needed
        map(
          (response: ApiResponse<T>) => (
            { data: toCamelCase(response.data), pagination: response.pagination } as ApiSuccessResponse<T>
          )),
      );
  }
}
