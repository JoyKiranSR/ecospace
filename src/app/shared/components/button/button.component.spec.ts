import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { ButtonVarient } from '../../../enums/shared.enum';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply default class as primary', () => {
    component.varient = ButtonVarient.PRIMARY;
    component.ngOnInit();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('button').classList).toContain('btn-primary');
  });

  it('should apply primary class', () => {
    component.varient = ButtonVarient.PRIMARY;
    component.ngOnInit();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('button').classList).toContain('btn-primary');
  });

  it('should apply secondary class', () => {
    component.varient = ButtonVarient.SECONDARY;
    component.ngOnInit();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('button').classList).toContain('btn-secondary');
  });

  it('should apply outline class', () => {
    component.varient = ButtonVarient.OUTLINE;
    component.ngOnInit();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('button').classList).toContain('btn-outline');
  });

  it('should apply danger class', () => {
    component.varient = ButtonVarient.DANGER;
    component.ngOnInit();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('button').classList).toContain('btn-danger');
  });
});
