import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawZonesModelComponent } from './draw-zones-model.component';

describe('DrawZonesModelComponent', () => {
  let component: DrawZonesModelComponent;
  let fixture: ComponentFixture<DrawZonesModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawZonesModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawZonesModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
