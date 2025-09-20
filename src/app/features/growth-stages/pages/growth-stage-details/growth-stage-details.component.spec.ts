import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthStageDetailsComponent } from './growth-stage-details.component';

describe('GrowthStageDetailsComponent', () => {
  let component: GrowthStageDetailsComponent;
  let fixture: ComponentFixture<GrowthStageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrowthStageDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrowthStageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
