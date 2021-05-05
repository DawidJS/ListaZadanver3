import { Component, OnInit } from '@angular/core';
import { Task } from '../Models/task';
import { WorkingService } from '../Service/working.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.less']
})
export class AddTaskComponent implements OnInit {

  newTask = new Task();
  dataBase:Task [] = [];

  constructor(private workingService: WorkingService) { }

  ngOnInit(): void {
    this.startSubscribe()
  }

  startSubscribe() {
    this.workingService.subject.subscribe(
      (e: Task[]) => {
        console.log(e);
        this.dataBase.push(e);
      },
    )
  }

  addTask(){
    this.dataBase.push(this.newTask);
    this.workingService.setSubject(this.dataBase);
  }


}
