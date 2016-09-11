import {Component} from '@angular/core';
import {TodoService} from "./todo/service/todo.service";

@Component({
  selector   : 'app',
  templateUrl: './app.html',
  providers: [TodoService]
})
export class AppComponent {
}
