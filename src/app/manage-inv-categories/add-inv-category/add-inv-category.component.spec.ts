import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInvCategoryComponent } from './add-inv-category.component';

describe('AddInvCategoryComponent', () => {
  let component: AddInvCategoryComponent;
  let fixture: ComponentFixture<AddInvCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddInvCategoryComponent]
    });
    fixture = TestBed.createComponent(AddInvCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
