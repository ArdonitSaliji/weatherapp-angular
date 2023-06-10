import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompassSvgComponent } from './compass-svg.component';

describe('CompassSvgComponent', () => {
  let component: CompassSvgComponent;
  let fixture: ComponentFixture<CompassSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompassSvgComponent]
    });
    fixture = TestBed.createComponent(CompassSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
