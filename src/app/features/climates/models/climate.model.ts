export interface Climate {
  averageHumidityMin: number; // percentage
  averageHumidityMax: number; // percentage
  averageRainfallMin: number; // in mm
  averageRainfallMax: number; // in mm
  averageTemperatureMin: number; // in Celsius
  averageTemperatureMax: number; // in Celsius
  description: string;
  id: string;
  name: string;
}
