import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib0component17Component } from './lib0childlib0component17.component';

describe('Lib0childlib0component17Component', () => {
  let component: Lib0childlib0component17Component;
  let fixture: ComponentFixture<Lib0childlib0component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib0component17Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib0component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
