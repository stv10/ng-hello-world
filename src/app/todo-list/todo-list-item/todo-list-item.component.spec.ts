import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListItem } from './todo-list-item.component';

describe('TodoListItemComponent', () => {
  let component: TodoListItem;
  let fixture: ComponentFixture<TodoListItem>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListItem]
    });
    fixture = TestBed.createComponent(TodoListItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
