import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandhanComponent } from './bandhan.component';

describe('BandhanComponent', () => {
  let component: BandhanComponent;
  let fixture: ComponentFixture<BandhanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandhanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
