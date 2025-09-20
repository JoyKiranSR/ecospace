import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Climate } from '../models/climate.model';
import { ApiSuccessResponse } from '../../../models/api.model';

@Injectable({
  providedIn: 'root'
})
export class ClimateService {
  climates: Map<string, Climate>;
  constructor() {
    this.climates = new Map<string, Climate>();
    this.climates.set('1', {
      averageHumidityMin: 30,
      averageHumidityMax: 70,
      averageRainfallMin: 500,
      averageRainfallMax: 1500,
      averageTemperatureMin: 15,
      averageTemperatureMax: 25,
      description: 'Tropical climate',
      id: '1',
      name: 'Tropics'
    });
    this.climates.set('2',
      {
        averageHumidityMin: 10,
        averageHumidityMax: 50,
        averageRainfallMin: 200,
        averageRainfallMax: 800,
        averageTemperatureMin: 0,
        averageTemperatureMax: 10,
        description: 'Temperate climate',
        id: '2',
        name: 'Temperate'
      });
    this.climates.set('3', {
      averageHumidityMin: 5,
      averageHumidityMax: 30,
      averageRainfallMin: 50,
      averageRainfallMax: 200,
      averageTemperatureMin: -10,
      averageTemperatureMax: 5,
      description: 'Polar climate',
      id: '3',
      name: 'Polar'
    });
    this.climates.set('4', {
      averageHumidityMin: 20,
      averageHumidityMax: 60,
      averageRainfallMin: 300,
      averageRainfallMax: 1000,
      averageTemperatureMin: 10,
      averageTemperatureMax: 20,
      description: 'Mediterranean climate',
      id: '4',
      name: 'Mediterranean'
    });
  }

  getClimates(): Observable<ApiSuccessResponse<Climate[]>> {
    // This method would typically make an HTTP request to fetch climate data.
    // Mock data for demonstration purposes.
    return of({
      data: Array.from(this.climates.values())
    });
  }
}
