import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveTasksComponent } from './remove-tasks.component';

describe('RemoveTasksComponent', () => {
  let component: RemoveTasksComponent;
  let fixture: ComponentFixture<RemoveTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
