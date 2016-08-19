import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";

import {ITodo} from "../model/todo.model";

import { Observable } from 'rxjs/Observable';

import "rxJs/add/operator/map";
import "rxJs/add/operator/catch";
import "rxJs/add/observable/throw";

@Injectable()
export class TodoService {

  private baseUrl = "http://localhost:8080/api";

  constructor(private http: Http) {}

  getTodos() : Observable<ITodo[]> {
    return this.http.get(this.baseUrl + "/todo-items/")
      .map(res => res.json())
      .catch(this.handleError);
  }

  addTodo(todo : ITodo): Observable<ITodo> {
    return this.post(todo);
  }

  private post(todo: ITodo): Observable<ITodo> {

    let body = JSON.stringify(todo);
    let headers  = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.baseUrl + "/todo-item/", body, options)
      .map(res => res.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any) : Observable<any> {
    console.log("Error is: " , error);
    return Observable.throw(error.message || error);
  }
}
