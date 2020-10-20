/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PengauditanSemakanDatComponent } from './pengauditan-semakan-dat.component';

describe('PengauditanSemakanDatComponent', () => {
  let component: PengauditanSemakanDatComponent;
  let fixture: ComponentFixture<PengauditanSemakanDatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengauditanSemakanDatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengauditanSemakanDatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
