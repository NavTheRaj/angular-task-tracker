import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TaskDetail } from 'src/app/model/TaskDetail';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css', '../task-item/task-item.component.css']
})
export class TaskDetailComponent implements OnInit {

  private routeSubscription!: Subscription;
  task!: TaskDetail


  constructor(private route: ActivatedRoute, private service: TaskService) {
  }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.service.getTaskDetail(params['id']).subscribe(task => this.task = task)
    })
  }

  ngOnDestroy() {
    this.routeSubscription?.unsubscribe()
  }

}
