/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PengauditanLaporanPengauditanComponent } from './pengauditan-laporan-pengauditan.component';

describe('PengauditanLaporanPengauditanComponent', () => {
  let component: PengauditanLaporanPengauditanComponent;
  let fixture: ComponentFixture<PengauditanLaporanPengauditanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengauditanLaporanPengauditanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengauditanLaporanPengauditanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
