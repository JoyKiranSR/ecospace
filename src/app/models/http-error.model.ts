export interface HttpError {
  status: number;
  message: string;
  error?: any; // Optional field to hold additional error information
}
