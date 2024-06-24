import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullAddIventoryComponent } from './full-add-iventory.component';

describe('FullAddIventoryComponent', () => {
  let component: FullAddIventoryComponent;
  let fixture: ComponentFixture<FullAddIventoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullAddIventoryComponent]
    });
    fixture = TestBed.createComponent(FullAddIventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
