import {Component, Input, EventEmitter, Output} from "@angular/core";
import {TodoItemComponent} from "../todo-item/todo-item.component";
import {Todo, ITodo} from "../model/todo.model";
import {TodoService} from "../service/todo.service";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  directives: [TodoItemComponent]
})
export class TodoListComponent {

  @Input() todos: ITodo[];

  @Output() deleted: EventEmitter<ITodo>;

  deleteItem(todo: ITodo) {
    this.deleted.emit(todo);
  }

  constructor() {
    this.deleted = new EventEmitter<ITodo>();
  }

  get sortedTodos(): ITodo[] {
    return this.todos
      .map(todo => todo)
      .sort((a, b) => {
        if (a.title > b.title) return 1;
        else if (a.title < b.title) return -1;
        else return 0;
      });
  }
}
