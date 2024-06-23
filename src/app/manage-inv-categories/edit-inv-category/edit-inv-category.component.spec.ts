import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInvCategoryComponent } from './edit-inv-category.component';

describe('EditInvCategoryComponent', () => {
  let component: EditInvCategoryComponent;
  let fixture: ComponentFixture<EditInvCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditInvCategoryComponent]
    });
    fixture = TestBed.createComponent(EditInvCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
