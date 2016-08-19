import {Component, Input} from "@angular/core";
import {Todo, ITodo} from "../model/todo.model";

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todoItem: ITodo;
}
