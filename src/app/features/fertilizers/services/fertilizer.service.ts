import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiSuccessResponse } from '../../../models/api.model';
import { Fertilizer } from '../models/fertilizer.model';

@Injectable({
  providedIn: 'root'
})
export class FertilizerService {

  constructor() { }

  getFertilizers(): Observable<ApiSuccessResponse<Fertilizer[]>> {
    // Placeholder for fetching fertilizers from an API or data source
    return new Observable<ApiSuccessResponse<Fertilizer[]>>((observer) => {
      observer.next({
        data: [
          {
            id: '1',
            name: 'Nitrogen Fertilizer',
            type: 'Chemical',
            form: 'Granular',
            applicationMethod: 'Soil Application',
            availability: 'Year-round',
            description: 'A fertilizer rich in nitrogen, essential for plant growth.',
            purpose: 'Promotes leafy growth'
          },
          {
            id: '2',
            name: 'Compost',
            type: 'Organic',
            form: 'Bulk',
            applicationMethod: 'Soil Amendment',
            availability: 'Seasonal',
            description: 'Decomposed organic matter that enriches soil.',
            purpose: 'Improves soil structure and fertility'
          }
        ]
      });
    });
  }
}
