/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SaaComponent } from './saa.component';

describe('SaaComponent', () => {
  let component: SaaComponent;
  let fixture: ComponentFixture<SaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
