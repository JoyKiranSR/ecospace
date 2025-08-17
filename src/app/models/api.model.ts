export interface ApiPagination {
  currentPage: number; // Current page number
  totalPages: number; // Total number of pages
  pageSize: number; // Number of items per page
  totalItems: number; // Total number of items across all pages
}

export interface ApiResponse<T> {
  data: T;
  endpoint: string; // The API endpoint that was called
  status: number;
  message: string;
  pagination?: ApiPagination; // Optional field for pagination details
  errors?: Record<string, string>[]; // Optional field to hold error messages
}

export interface ApiSuccessResponse<T> {
  data: T; // The main data returned by the API
  pagination?: ApiPagination; // Optional pagination details
}
