import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullEditIventoryComponent } from './full-edit-iventory.component';

describe('FullEditIventoryComponent', () => {
  let component: FullEditIventoryComponent;
  let fixture: ComponentFixture<FullEditIventoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullEditIventoryComponent]
    });
    fixture = TestBed.createComponent(FullEditIventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
