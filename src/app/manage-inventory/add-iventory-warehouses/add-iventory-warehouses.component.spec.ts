import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIventoryWarehousesComponent } from './add-iventory-warehouses.component';

describe('AddIventoryWarehousesComponent', () => {
  let component: AddIventoryWarehousesComponent;
  let fixture: ComponentFixture<AddIventoryWarehousesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddIventoryWarehousesComponent]
    });
    fixture = TestBed.createComponent(AddIventoryWarehousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
