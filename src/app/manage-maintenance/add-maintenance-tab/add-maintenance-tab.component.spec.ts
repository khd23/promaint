import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaintenanceTabComponent } from './add-maintenance-tab.component';

describe('AddMaintenanceTabComponent', () => {
  let component: AddMaintenanceTabComponent;
  let fixture: ComponentFixture<AddMaintenanceTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMaintenanceTabComponent]
    });
    fixture = TestBed.createComponent(AddMaintenanceTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
