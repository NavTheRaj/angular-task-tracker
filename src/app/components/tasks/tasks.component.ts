import { Component, OnInit } from '@angular/core'
import { TaskService } from "../../services/task.service"
import { Task } from "../../model/Task"
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = []

  constructor(private taskService: TaskService, private router: Router) {
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  // Add Task
  addTask(task: Task) {
    this.taskService.addTask(task).subscribe(res => {
      return this.tasks.push(task)
    })
  }

  // Delete Task
  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter((t) => t._id !== task._id))
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder
    this.taskService.updateTaskReminder(task).subscribe()
  }

  taskItemClick(task: Task) {
    this.router.navigateByUrl(`/task/${task._id}`)
  }

}
