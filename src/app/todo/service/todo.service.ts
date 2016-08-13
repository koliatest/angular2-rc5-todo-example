import {Injectable} from "@angular/core";
import {ITodo} from "../model/todo.model";
import {todos} from "../shared/todo.data";

@Injectable()
export class TodoService {

  getTodos() : ITodo[] {
    return todos;
  }

  addTodo(todo : ITodo) {
    todos.push(todo);
  }
}
