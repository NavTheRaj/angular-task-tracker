import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-detail-comments',
  templateUrl: './task-detail-comments.component.html',
  styleUrls: ['./task-detail-comments.component.css', '../task-item/task-item.component.css']
})
export class TaskDetailCommentsComponent {
  @Input() update!: String
}
