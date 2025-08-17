import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastType } from '../../../enums/shared.enum';
import { Toast } from '../../../models/toast.model';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastSubject: BehaviorSubject<Toast[]>;
  toast$: Observable<Toast[]>;
  private counter: number;

  /**
   * Initializes the toast service.
   * Creates a subject to observe toast messages and an observable to subscribe to these messages.
   * Sets the counter to 0.
   */
  constructor() {
    this.toastSubject = new BehaviorSubject<Toast[]>([]);
    this.toast$ = this.toastSubject.asObservable();
    this.counter = 0;
  }

  /**
   * Show a toast message with the given message, type and duration.
   * The toast will be automatically removed after the given duration.
   *
   * @param message - The message to display in the toast.
   * @param type - The type of the toast (success, error, warning, info).
   * @param duration - The duration in milliseconds the toast should be displayed. Default is 3000ms.
   */
  show(message: string, type: ToastType, duration = 3000) {
    const id = ++this.counter; // increment counter
    const toast: Toast = { id, type, message }; // create toast
    this.toastSubject.next([...this.toastSubject.getValue(), toast]); // add toast
    // remove toast after duration
    setTimeout(() => this.remove(id), duration);
  }

  /**
   * Removes a toast message with the given id from the toast subject.
   *
   * @param id - The id of the toast message to remove.
   */
  remove(id: number) {
    this.toastSubject.next(this.toastSubject.getValue().filter(t => t.id !== id));
  }
}
