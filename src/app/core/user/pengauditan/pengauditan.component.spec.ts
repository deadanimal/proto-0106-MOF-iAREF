/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PengauditanComponent } from './pengauditan.component';

describe('PengauditanComponent', () => {
  let component: PengauditanComponent;
  let fixture: ComponentFixture<PengauditanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengauditanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengauditanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
