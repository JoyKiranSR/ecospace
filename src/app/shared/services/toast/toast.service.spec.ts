import { TestBed } from '@angular/core/testing';

import { ToastService } from './toast.service';
import { ToastType } from '../../../enums/shared.enum';

describe('ToastService', () => {
  let service: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show a toast message', () => {
    service.show('Test message', ToastType.SUCCESS);
    expect(service['toastSubject'].getValue().length).toBe(1);
  });

  it('should remove a toast message', () => {
    service.show('Test message', ToastType.SUCCESS);
    service.remove(1);
    expect(service['toastSubject'].getValue().length).toBe(0);
  });
});
