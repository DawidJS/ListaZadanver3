import { Component, OnInit } from '@angular/core';
import { Task } from '../Models/task';
import { WorkingService } from '../Service/working.service';

@Component({
  selector: 'app-to-dotask',
  templateUrl: './to-dotask.component.html',
  styleUrls: ['./to-dotask.component.less']
})
export class ToDOTaskComponent implements OnInit {

  listOfTasks: Task[] = []; 

  constructor(private working: WorkingService) { }

  ngOnInit(): void {
    
  }

}
