import { NgModule } from '@angular/core';
import { TodoListComponent } from './todo-list.component';
import { TodoListFormComponent } from './todo-list-form/todo-list-form.component';
import { TodoListItem } from './todo-list-item/todo-list-item.component';

@NgModule({
    declarations: [
        TodoListComponent,
        TodoListFormComponent,
        TodoListItem
    ],
    imports: [],
    providers: [],
    bootstrap: []
})

export class TodoListModule { }
