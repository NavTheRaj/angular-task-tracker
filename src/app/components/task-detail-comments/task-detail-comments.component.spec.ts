import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetailCommentsComponent } from './task-detail-comments.component';

describe('TaskDetailCommentsComponent', () => {
  let component: TaskDetailCommentsComponent;
  let fixture: ComponentFixture<TaskDetailCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskDetailCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDetailCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
