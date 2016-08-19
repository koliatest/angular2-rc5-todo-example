import {Component, Input} from "@angular/core";
import {TodoItemComponent} from "../todo-item/todo-item.component";
import {Todo, ITodo} from "../model/todo.model";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  directives: [TodoItemComponent]
})
export class TodoListComponent {

  @Input() todoItems: ITodo[];
}
