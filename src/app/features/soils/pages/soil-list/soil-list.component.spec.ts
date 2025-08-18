import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoilListComponent } from './soil-list.component';

describe('SoilListComponent', () => {
  let component: SoilListComponent;
  let fixture: ComponentFixture<SoilListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoilListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoilListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
