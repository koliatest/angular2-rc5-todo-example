import {Component} from '@angular/core';
import {TodoComponent} from "./todo/todo.component";

@Component({
  selector   : 'app',
  templateUrl: './app.html',
  directives: [TodoComponent]
})
export class AppComponent {
}
