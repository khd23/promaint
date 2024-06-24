import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIventoryVendorsComponent } from './add-iventory-vendors.component';

describe('AddIventoryVendorsComponent', () => {
  let component: AddIventoryVendorsComponent;
  let fixture: ComponentFixture<AddIventoryVendorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddIventoryVendorsComponent]
    });
    fixture = TestBed.createComponent(AddIventoryVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
