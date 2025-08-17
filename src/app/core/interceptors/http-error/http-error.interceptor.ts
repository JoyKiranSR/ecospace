import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

import { HttpError } from '../../../feature/components/plants/http-error.model';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      // Handle the error here
      const httpError: HttpError = {
        status: error.status,
        message: error.message,
      };
      console.error('HTTP Error:', httpError);
      return throwError(() => httpError); // Re-throw the error for further handling
    })
  );
};
