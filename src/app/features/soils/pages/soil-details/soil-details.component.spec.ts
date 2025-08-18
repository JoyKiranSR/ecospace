import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoilDetailsComponent } from './soil-details.component';

describe('SoilDetailsComponent', () => {
  let component: SoilDetailsComponent;
  let fixture: ComponentFixture<SoilDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoilDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoilDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
