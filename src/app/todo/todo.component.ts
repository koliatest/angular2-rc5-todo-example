import {Component, OnInit} from '@angular/core';
import {TodoFormComponent} from "./todo-form/todo-form.component";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {Todo, ITodo} from "./model/todo.model";
import {TodoService} from "./service/todo.service";

@Component({
  selector: 'todo',
  styleUrls: ['./todo.component.css'],
  templateUrl: './todo.component.html',
  directives: [TodoFormComponent, TodoListComponent]
})
export class TodoComponent implements OnInit{

  errorMessage: string;
  todos: ITodo[];

  constructor(private todoService: TodoService) {
    this.todos = [];
  }

  ngOnInit() {
    this.todoService.getTodos().then(
                    todos => this.todos = todos,
                    error => this.errorMessage = <any>error);
  }

  addTodo(todo: ITodo) {
    this.todoService.addTodo(todo).then(todo => this.todos.push(todo),
      error =>  this.errorMessage = <any>error);
  }

  deleteItem(todo: ITodo) {
    this.todoService.deleteItem(todo).then(todo => this.deleteTodo(todo));
  }

  private deleteTodo(todo: ITodo): void {
    let index = this.todos.indexOf(todo);

    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
}
