import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIventoryComponent } from './add-iventory.component';

describe('AddIventoryComponent', () => {
  let component: AddIventoryComponent;
  let fixture: ComponentFixture<AddIventoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddIventoryComponent]
    });
    fixture = TestBed.createComponent(AddIventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
