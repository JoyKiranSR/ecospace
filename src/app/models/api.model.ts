interface ApiPagination {
  currentPage: number; // Current page number
  totalPages: number; // Total number of pages
  pageSize: number; // Number of items per page
  totalItems: number; // Total number of items across all pages
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
  pagination?: ApiPagination; // Optional field for pagination details
  error?: string; // Optional field to hold error messages
}
