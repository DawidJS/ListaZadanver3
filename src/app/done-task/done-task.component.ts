import { Component, OnInit } from '@angular/core';
import { Task } from '../Models/task';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.less']
})
export class DoneTaskComponent implements OnInit {

  listOfTasksDone: Task[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
