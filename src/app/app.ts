import {Component} from '@angular/core';
import {TodoComponent} from "./todo/todo.component";
import {TodoService} from "./todo/service/todo.service";

@Component({
  selector   : 'app',
  templateUrl: './app.html',
  directives: [TodoComponent],
  providers: [TodoService]
})
export class AppComponent {
}
