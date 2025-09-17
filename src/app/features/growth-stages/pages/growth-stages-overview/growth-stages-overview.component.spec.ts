import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthStagesOverviewComponent } from './growth-stages-overview.component';

describe('GrowthStagesOverviewComponent', () => {
  let component: GrowthStagesOverviewComponent;
  let fixture: ComponentFixture<GrowthStagesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrowthStagesOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrowthStagesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
