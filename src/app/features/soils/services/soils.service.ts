import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api-service/api-service.service';
import { Observable } from 'rxjs';
import { ApiSuccessResponse } from '../../../models/api.model';
import { Soil } from '../models/soil.model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SoilsService {

  constructor(private api: ApiService) { }

  getSoils(limit: number, page: number): Observable<ApiSuccessResponse<Soil[]>> {
    // Set the request parameters for pagination
    const reqParams = new HttpParams().set('limit', limit).set('page', page);
    return this.api.get<Soil[]>('soils', { params: reqParams });
  }
}
