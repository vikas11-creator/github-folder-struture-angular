import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Purchase3Component } from './purchase3.component';

describe('Purchase3Component', () => {
  let component: Purchase3Component;
  let fixture: ComponentFixture<Purchase3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Purchase3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Purchase3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
