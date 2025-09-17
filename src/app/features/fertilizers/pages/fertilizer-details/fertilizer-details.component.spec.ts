import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FertilizerDetailsComponent } from './fertilizer-details.component';

describe('FertilizerDetailsComponent', () => {
  let component: FertilizerDetailsComponent;
  let fixture: ComponentFixture<FertilizerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FertilizerDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FertilizerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
