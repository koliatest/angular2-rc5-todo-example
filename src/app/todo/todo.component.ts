import {Component} from '@angular/core';
import {TodoFormComponent} from "./todo-form/todo-form.component";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {Todo} from "./model/todo.model";
import {TodoService} from "./service/todo.service";

@Component({
  selector: 'todo',
  styleUrls: ['./todo.component.css'],
  templateUrl: './todo.component.html',
  directives: [TodoFormComponent, TodoListComponent],
  providers: [TodoService]
})
export class TodoComponent {

  constructor(private todoService: TodoService) {

  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo);
  }
}
