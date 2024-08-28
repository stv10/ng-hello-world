import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { TodoListItem } from './todo-list-item/todo-list-item.component';
import { TodoListFormComponent } from './todo-list-form/todo-list-form.component';

export interface Task {
  title: string;
  isCompleted: boolean;
}

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit{
  tasks !:Task[];

  constructor(private cdr: ChangeDetectorRef){
    console.log("cdr", cdr);
  }
  
  addTask(task: string) {
    if(this.tasks == undefined) {
      console.log("tasks undefined",this.tasks);
      this.tasks = [];
    }
    this.tasks.push({ title: task, isCompleted: false });
    console.log(this.tasks);
  }

  ngOnInit(): void {
    this.initializer();
  }

  private initializer() {
    this.tasks = [
      { title: 'Task 1', isCompleted: false },
      { title: 'Task 2', isCompleted: false },
      { title: 'Task 3', isCompleted: false },
    ];
    this.cdr.detectChanges();
  }

}
