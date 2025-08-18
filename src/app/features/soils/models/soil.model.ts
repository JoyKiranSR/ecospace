export interface PH {
  phMin: number;
  phMax: number;
  phType: string;
}

export interface Soil {
  color?: string;
  description?: string;
  drainage: string;
  id: string;
  name: string;
  nutrientLevel: string;
  organicMatterLevel: string;
  phMin?: number;
  phMax?: number;
  phType?: string;
  texture: string;
  type: string;
  waterRetentionLevel: string;
}
