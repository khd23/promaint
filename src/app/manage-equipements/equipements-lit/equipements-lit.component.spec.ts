import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipementsLitComponent } from './equipements-lit.component';

describe('EquipementsLitComponent', () => {
  let component: EquipementsLitComponent;
  let fixture: ComponentFixture<EquipementsLitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipementsLitComponent]
    });
    fixture = TestBed.createComponent(EquipementsLitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
