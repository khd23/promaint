import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIventoryVendorsModalComponent } from './add-iventory-vendors-modal.component';

describe('AddIventoryVendorsModalComponent', () => {
  let component: AddIventoryVendorsModalComponent;
  let fixture: ComponentFixture<AddIventoryVendorsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddIventoryVendorsModalComponent]
    });
    fixture = TestBed.createComponent(AddIventoryVendorsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
