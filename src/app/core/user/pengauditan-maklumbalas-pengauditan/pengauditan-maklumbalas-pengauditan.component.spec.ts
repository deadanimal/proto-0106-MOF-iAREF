/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PengauditanMaklumbalasPengauditanComponent } from './pengauditan-maklumbalas-pengauditan.component';

describe('PengauditanMaklumbalasPengauditanComponent', () => {
  let component: PengauditanMaklumbalasPengauditanComponent;
  let fixture: ComponentFixture<PengauditanMaklumbalasPengauditanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengauditanMaklumbalasPengauditanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengauditanMaklumbalasPengauditanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
