import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ApiSuccessResponse } from '../../../models/api.model';
import { Season } from '../models/season.model';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {
  private seasons: Map<string, Season>;

  constructor() {
    this.seasons = new Map<string, Season>();
    // Sample data initialization
    this.seasons.set('1', {
      id: '1',
      name: 'Spring',
      description: 'The season of new beginnings, characterized by blooming flowers and mild weather.',
      commonActivities: ['Planting', 'Pruning', 'Fertilizing'],
      typicalDayLightPattern: 'Increasing daylight hours',
      dayLightHours: 12,
      notes: 'Ideal time for starting new crops.'
    });
    this.seasons.set('2', {
      id: '2',
      name: 'Summer',
      description: 'The warmest season, known for long days and abundant sunshine.',
      commonActivities: ['Irrigation', 'Weeding', 'Pest Control'],
      typicalDayLightPattern: 'Longest daylight hours',
      dayLightHours: 14,
      notes: 'High temperatures may require additional watering.'
    });
    this.seasons.set('3', {
      id: '3',
      name: 'Autumn',
      description: 'The transition season with cooler temperatures and falling leaves.',
      commonActivities: ['Harvesting', 'Soil Preparation', 'Composting'],
      typicalDayLightPattern: 'Decreasing daylight hours',
      dayLightHours: 10,
      notes: 'Good time for planting cover crops.'
    });
    this.seasons.set('4', {
      id: '4',
      name: 'Winter',
      description: 'The coldest season, often associated with dormancy in plants.',
      commonActivities: ['Mulching', 'Tool Maintenance', 'Planning'],
      typicalDayLightPattern: 'Shortest daylight hours',
      dayLightHours: 8,
      notes: 'Focus on indoor gardening and planning for the next season.'
    });
  }

  getSeasons(): Observable<ApiSuccessResponse<Season[]>> {
    return of({ data: Array.from(this.seasons.values()) });
  }

  getSeasonById(id: string): Observable<ApiSuccessResponse<Season | null>> {
    const season = this.seasons.get(id) || null;
    return of({ data: season });
  }
}
