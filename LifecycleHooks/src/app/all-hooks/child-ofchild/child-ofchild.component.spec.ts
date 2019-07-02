import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOfchildComponent } from './child-ofchild.component';

describe('ChildOfchildComponent', () => {
  let component: ChildOfchildComponent;
  let fixture: ComponentFixture<ChildOfchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildOfchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildOfchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
