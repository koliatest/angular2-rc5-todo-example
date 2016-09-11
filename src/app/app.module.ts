import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app";
import {Github} from "./github/shared/github";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {TodoComponent} from './todo/todo.component';
import {Home} from './home/home';
import {MdButton} from '@angular2-material/button'
import {MdCard} from '@angular2-material/card'
import {MdInput} from '@angular2-material/input'
import {MdCheckbox} from '@angular2-material/checkbox'
import {RepoBrowser} from './github/repo-browser/repo-browser';
import {RepoList} from './github/repo-list/repo-list';
import {RepoDetail} from './github/repo-detail/repo-detail';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {TodoListComponent} from "./todo/todo-list/todo-list.component";
import {TodoItemComponent} from "./todo/todo-item/todo-item.component";
import {TodoFormComponent} from "./todo/todo-form/todo-form.component";

@NgModule({
  declarations: [
    AppComponent, TodoComponent, RepoBrowser,
    RepoList, RepoDetail, Home, TodoListComponent,
    TodoItemComponent, TodoFormComponent, MdButton,
    MdInput, MdCheckbox, MdCard
  ],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [Github, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
