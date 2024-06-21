import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePwdEmployeeComponent } from './change-pwd-employee.component';

describe('ChangePwdEmployeeComponent', () => {
  let component: ChangePwdEmployeeComponent;
  let fixture: ComponentFixture<ChangePwdEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangePwdEmployeeComponent]
    });
    fixture = TestBed.createComponent(ChangePwdEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
