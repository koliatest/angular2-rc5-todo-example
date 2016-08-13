import {Component, OnInit} from "@angular/core";
import {TodoItemComponent} from "../todo-item/todo-item.component";
import {Todo} from "../model/todo.model";
import {TodoService} from "../service/todo.service";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  directives: [TodoItemComponent],
  providers: [TodoService]
})
export class TodoListComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService) {
    this.todos = [];
  }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }
}
