import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Todo, ITodo} from "../model/todo.model";
import {TodoService} from "../service/todo.service";

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todo: ITodo;

  @Output() deleted: EventEmitter<ITodo>;

  constructor() {
    this.deleted = new EventEmitter<ITodo>();
  }

  deleteItem() {
    this.deleted.emit(this.todo);
  }
}
