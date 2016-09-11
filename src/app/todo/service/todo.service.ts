import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from "@angular/http";

import {ITodo} from "../model/todo.model";

import "rxjs/add/operator/toPromise";

@Injectable()
export class TodoService {

  private baseUrl = "http://localhost:8080/api";

  constructor(private http: Http) {}

  getTodos() : Promise<ITodo[]> {
    return this.http.get(this.baseUrl + "/todo-items/", { body: ''  })
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body;

    // check if empty, before call json
    if (res.text()) {
      body = res.json();
    }

    return body || {};
  }

  addTodo(todo : ITodo): Promise<ITodo> {
    return this.post(todo);
  }

  private post(todo: ITodo): Promise<ITodo> {

    let body = JSON.stringify( todo );
    let headers  = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl + "/todo-item/", body, options)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  deleteItem(todo: ITodo): Promise<ITodo> {

    let headers  = new Headers({ 'Content-Type': 'application/json' });

    let url = `${this.baseUrl}/todo-item/${todo.id}`;

    return this.http.delete(url, { headers, body: '' })
            .toPromise()
            .then(res => todo)
            .catch(this.handleError);
  }

  private handleError(error: any) : Promise<any> {
    console.log('Произошла ошибка', error);
    return Promise.reject(error.message || error);
  }
}
