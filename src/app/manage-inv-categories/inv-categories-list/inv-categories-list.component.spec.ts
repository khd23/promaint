import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvCategoriesListComponent } from './inv-categories-list.component';

describe('InvCategoriesListComponent', () => {
  let component: InvCategoriesListComponent;
  let fixture: ComponentFixture<InvCategoriesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvCategoriesListComponent]
    });
    fixture = TestBed.createComponent(InvCategoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
