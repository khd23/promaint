import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEquipemntComponent } from './add-equipemnt.component';

describe('AddEquipemntComponent', () => {
  let component: AddEquipemntComponent;
  let fixture: ComponentFixture<AddEquipemntComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEquipemntComponent]
    });
    fixture = TestBed.createComponent(AddEquipemntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
