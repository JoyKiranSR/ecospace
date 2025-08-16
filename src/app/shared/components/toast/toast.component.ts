import { Component } from '@angular/core';
import { Toast } from '../../../models/toast.model';
import { Observable } from 'rxjs';
import { ToastService } from './toast.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  toasts$: Observable<Toast[]>;
  toastBgClass: string;

  constructor(private toastService: ToastService) {
    this.toasts$ = toastService.toast$;
    this.toastBgClass = 'bg-blue-500'; // info class
  }
}
