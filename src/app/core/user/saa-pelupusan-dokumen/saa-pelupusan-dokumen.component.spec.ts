/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SaaPelupusanDokumenComponent } from './saa-pelupusan-dokumen.component';

describe('SaaPelupusanDokumenComponent', () => {
  let component: SaaPelupusanDokumenComponent;
  let fixture: ComponentFixture<SaaPelupusanDokumenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaaPelupusanDokumenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaaPelupusanDokumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
