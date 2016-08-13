import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Todo} from "../model/todo.model";

@Component({
  selector: 'todo-form',
  templateUrl: 'todo-form.component.html',
  styleUrls: ['todo-form.component.css']
})
export class TodoFormComponent {

  @Output() added = new EventEmitter();

  add(title: string) {

    if(title) {
      this.added.emit(new Todo(title));
    }
  }
}
