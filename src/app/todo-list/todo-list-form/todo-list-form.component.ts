import { Component, Input } from '@angular/core';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-list-form.component.html',
  styleUrls: ['./todo-list-form.component.scss']
})
export class TodoListFormComponent {
  inputValue='';
  formIsValid = false;
  @Input() addTask!: (task: string) => void;
  testId='main-cta';

  save(event: Event) {
    event.preventDefault();
    if(this.formIsValid) {
      this.addTask(this.inputValue);
      this.inputValue = '';
    }
    
  }

  validateInput(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
    this.formIsValid = this.inputValue.length > 0;
  }
}
