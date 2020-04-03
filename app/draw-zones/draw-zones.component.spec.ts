import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawZonesComponent } from './draw-zones.component';

describe('DrawZonesComponent', () => {
  let component: DrawZonesComponent;
  let fixture: ComponentFixture<DrawZonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawZonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
