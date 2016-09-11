import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Todo, ITodo} from "../model/todo.model";

@Component({
  selector: 'todo-form',
  templateUrl: 'todo-form.component.html',
  styleUrls: ['todo-form.component.css']
})
export class TodoFormComponent {

  @Output() added: EventEmitter<Todo>;

  constructor() {
    this.added = new EventEmitter<Todo>();
  }

  add(title: string) {

    if(title) {
      let todo = new Todo(title);
      this.added.emit(todo);
    }
  }
}
