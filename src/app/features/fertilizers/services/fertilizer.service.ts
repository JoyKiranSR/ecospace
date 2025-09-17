import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiSuccessResponse } from '../../../models/api.model';
import { Fertilizer } from '../models/fertilizer.model';

@Injectable({
  providedIn: 'root'
})
export class FertilizerService {
  fertilizers: Map<string, Fertilizer> = new Map();
       
  constructor() {
    this.fertilizers = new Map();
    this.fertilizers.set('1', {
            id: '1',
            name: 'Nitrogen Fertilizer',
            type: 'Inorganic',
            form: 'Granular',
            applicationMethod: 'Foliar Spray',
            description: 'A fertilizer rich in nitrogen, essential for plant growth.',
            idealSeason: 'Spring',
            nutrients: ['Nitrogen (N)'],
            purpose: 'Promotes leafy growth'
          });
    this.fertilizers.set('2',
          {
            id: '2',
            name: 'Compost',
            type: 'Organic',
            form: 'Bulk',
            applicationMethod: 'Fertilizer Spreader',
            description: 'Decomposed organic matter that enriches soil.',
            idealSeason: 'Fall',
            purpose: 'Improves soil structure and fertility'
          });
  }

  getFertilizers(): Observable<ApiSuccessResponse<Fertilizer[]>> {
    // Placeholder for fetching fertilizers from an API or data source
    return new Observable<ApiSuccessResponse<Fertilizer[]>>((observer) => {
      observer.next({
        data: Array.from(this.fertilizers.values()),
      });
    });
  }

  getFertilizerDetails(id: string): Observable<ApiSuccessResponse<Fertilizer>> {
    // Placeholder for fetching fertilizer details by ID from an API or data source
    return new Observable<ApiSuccessResponse<Fertilizer>>((observer) => {
      const fertilizer = this.fertilizers.get(id) || null;
      if (fertilizer) {
        observer.next({ data: fertilizer });
      } else {
        observer.error(new Error('Fertilizer not found'));
      }
    });
  }
}
