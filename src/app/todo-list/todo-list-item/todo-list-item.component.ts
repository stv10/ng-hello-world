import { Component, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItem implements OnInit{
  @Input() taskTitle: string = '';
  @Input() isCompleted: boolean = false;

  ngOnInit(): void {}

  private completeTask() {
    this.isCompleted = true;
  }

  updateTitle(newTitle: string) {
    this.taskTitle = newTitle;
  }
}
