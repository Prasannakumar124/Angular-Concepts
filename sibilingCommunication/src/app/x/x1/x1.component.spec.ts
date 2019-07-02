import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { X1Component } from './x1.component';

describe('X1Component', () => {
  let component: X1Component;
  let fixture: ComponentFixture<X1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ X1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(X1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
