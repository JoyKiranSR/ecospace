export interface Fertilizer {
  applicationMethod: string;
  description?: string;
  form: string;
  id: string;
  idealSeason: string;
  name: string;
  notes?: string;
  nutrients?: string[];
  purpose: string;
  type: string;
  usage?: string;
}
