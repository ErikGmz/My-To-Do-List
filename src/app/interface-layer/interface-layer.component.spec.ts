import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceLayerComponent } from './interface-layer.component';

describe('InterfaceLayerComponent', () => {
  let component: InterfaceLayerComponent;
  let fixture: ComponentFixture<InterfaceLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceLayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
