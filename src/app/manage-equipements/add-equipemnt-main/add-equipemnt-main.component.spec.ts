import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEquipemntMainComponent } from './add-equipemnt-main.component';

describe('AddEquipemntMainComponent', () => {
  let component: AddEquipemntMainComponent;
  let fixture: ComponentFixture<AddEquipemntMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEquipemntMainComponent]
    });
    fixture = TestBed.createComponent(AddEquipemntMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
