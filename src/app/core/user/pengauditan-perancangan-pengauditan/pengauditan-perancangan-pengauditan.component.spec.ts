/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PengauditanPerancanganPengauditanComponent } from './pengauditan-perancangan-pengauditan.component';

describe('PengauditanPerancanganPengauditanComponent', () => {
  let component: PengauditanPerancanganPengauditanComponent;
  let fixture: ComponentFixture<PengauditanPerancanganPengauditanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengauditanPerancanganPengauditanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengauditanPerancanganPengauditanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
