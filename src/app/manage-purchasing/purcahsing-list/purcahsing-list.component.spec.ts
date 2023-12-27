import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurcahsingListComponent } from './purcahsing-list.component';

describe('PurcahsingListComponent', () => {
  let component: PurcahsingListComponent;
  let fixture: ComponentFixture<PurcahsingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurcahsingListComponent]
    });
    fixture = TestBed.createComponent(PurcahsingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
