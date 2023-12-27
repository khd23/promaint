import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvocesListComponent } from './invoces-list.component';

describe('InvocesListComponent', () => {
  let component: InvocesListComponent;
  let fixture: ComponentFixture<InvocesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvocesListComponent]
    });
    fixture = TestBed.createComponent(InvocesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
