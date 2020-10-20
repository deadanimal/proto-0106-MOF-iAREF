/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KamusRujukanComponent } from './kamus-rujukan.component';

describe('KamusRujukanComponent', () => {
  let component: KamusRujukanComponent;
  let fixture: ComponentFixture<KamusRujukanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KamusRujukanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KamusRujukanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
