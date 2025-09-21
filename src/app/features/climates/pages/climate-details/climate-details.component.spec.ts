import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimateDetailsComponent } from './climate-details.component';

describe('ClimateDetailsComponent', () => {
  let component: ClimateDetailsComponent;
  let fixture: ComponentFixture<ClimateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClimateDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClimateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
