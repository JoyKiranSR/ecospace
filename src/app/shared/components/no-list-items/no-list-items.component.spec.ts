import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoListItemsComponent } from './no-list-items.component';

describe('NoListItemsComponent', () => {
  let component: NoListItemsComponent;
  let fixture: ComponentFixture<NoListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoListItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
