/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MaklumbalasComponent } from './maklumbalas.component';

describe('MaklumbalasComponent', () => {
  let component: MaklumbalasComponent;
  let fixture: ComponentFixture<MaklumbalasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaklumbalasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaklumbalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
