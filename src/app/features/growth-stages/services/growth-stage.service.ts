import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GrowthStage } from '../models/growth-stage.model';
import { ApiService } from '../../../core/services/api-service/api-service.service';
import { ApiSuccessResponse } from '../../../models/api.model';

@Injectable({
  providedIn: 'root'
})
export class GrowthStageService {

  constructor(private api: ApiService) { }

  getGrowthStages(): Observable<ApiSuccessResponse<GrowthStage[]>> {
    return this.api.get<GrowthStage[]>('growth-stages');
  }

  getGrowthStageDetails(id: string): Observable<ApiSuccessResponse<GrowthStage>> {
    return this.api.get<GrowthStage>(`growth-stages/${id}`);
  }
}
