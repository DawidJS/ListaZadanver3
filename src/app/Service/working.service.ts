import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Task } from '../Models/task';

@Injectable({
  providedIn: 'root'
})
export class WorkingService {

  subject = new Subject<Task[]>();
  behavior = new BehaviorSubject<any>([]);

  constructor() { }

  setSubject(e: Task[]){
    this.subject.next(e);
  }


}
