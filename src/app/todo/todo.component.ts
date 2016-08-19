import {Component, OnInit} from '@angular/core';
import {TodoFormComponent} from "./todo-form/todo-form.component";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {Todo, ITodo} from "./model/todo.model";
import {TodoService} from "./service/todo.service";

@Component({
  selector: 'todo',
  styleUrls: ['./todo.component.css'],
  templateUrl: './todo.component.html',
  directives: [TodoFormComponent, TodoListComponent],
  providers: [TodoService]
})
export class TodoComponent implements OnInit{

  todos: ITodo[];

  constructor(private todoService: TodoService) {
    this.todos = [];
  }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo)
      .subscribe(todo => this.todos.push(todo));
  }
}
