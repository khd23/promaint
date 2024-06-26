import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvGeneralInfoComponent } from './inv-general-info.component';

describe('InvGeneralInfoComponent', () => {
  let component: InvGeneralInfoComponent;
  let fixture: ComponentFixture<InvGeneralInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvGeneralInfoComponent]
    });
    fixture = TestBed.createComponent(InvGeneralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
