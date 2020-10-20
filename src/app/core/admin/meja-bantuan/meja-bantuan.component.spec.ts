/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MejaBantuanComponent } from './meja-bantuan.component';

describe('MejaBantuanComponent', () => {
  let component: MejaBantuanComponent;
  let fixture: ComponentFixture<MejaBantuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MejaBantuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MejaBantuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
