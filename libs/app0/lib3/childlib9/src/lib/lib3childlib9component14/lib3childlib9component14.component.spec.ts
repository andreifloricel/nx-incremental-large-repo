import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib9component14Component } from './lib3childlib9component14.component';

describe('Lib3childlib9component14Component', () => {
  let component: Lib3childlib9component14Component;
  let fixture: ComponentFixture<Lib3childlib9component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib9component14Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib9component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
