import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib5component40Component } from './lib2childlib5component40.component';

describe('Lib2childlib5component40Component', () => {
  let component: Lib2childlib5component40Component;
  let fixture: ComponentFixture<Lib2childlib5component40Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib5component40Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib5component40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
