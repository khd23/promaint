import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIventoryComponent } from './view-iventory.component';

describe('ViewIventoryComponent', () => {
  let component: ViewIventoryComponent;
  let fixture: ComponentFixture<ViewIventoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewIventoryComponent]
    });
    fixture = TestBed.createComponent(ViewIventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
