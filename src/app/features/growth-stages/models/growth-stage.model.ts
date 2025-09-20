export interface GrowthStage {
  description: string;
  id: string;
  imageUrl?: string;
  maxDays: number;
  minDays: number;
  name: string;
  notes?: string;
  order: number;
}
