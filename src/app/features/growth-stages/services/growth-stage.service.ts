import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GrowthStage } from '../models/growth-stage.model';

@Injectable({
  providedIn: 'root'
})
export class GrowthStageService {

  constructor() { }

  getGrowthStages(): Observable<GrowthStage[]> {
    // Placeholder for actual HTTP call to fetch growth stages
    return new Observable<GrowthStage[]>((observer) => {
      const growthStages: GrowthStage[] = [
        {
          id: '1',
          name: 'Germination',
          description: 'The process by which a plant grows from a seed.',
          minDays: 1,
          maxDays: 14,
          order: 1
        },
        {
          id: '2',
          name: 'Vegetative',
          description: 'The stage where the plant focuses on growing leaves and stems.',
          minDays: 15,
          maxDays: 60,
          order: 2
        },
        {
          id: '3',
          name: 'Budding',
          description: 'The phase where flower buds start to form.',
          minDays: 61,
          maxDays: 90,
          order: 3
        },
        {
          id: '4',
          name: 'Flowering',
          description: 'The stage when the plant produces flowers.',
          minDays: 91,
          maxDays: 120,
          order: 4
        },
        {
          id: '5',
          name: 'Fruiting',
          description: 'The phase where fruits develop and mature.',
          minDays: 121,
          maxDays: 150,
          order: 5
        }
      ];
      observer.next(growthStages);
      observer.complete();
    });
  }
}
