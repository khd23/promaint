import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIventoryWarehousesModalComponent } from './add-iventory-warehouses-modal.component';

describe('AddIventoryWarehousesModalComponent', () => {
  let component: AddIventoryWarehousesModalComponent;
  let fixture: ComponentFixture<AddIventoryWarehousesModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddIventoryWarehousesModalComponent]
    });
    fixture = TestBed.createComponent(AddIventoryWarehousesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
