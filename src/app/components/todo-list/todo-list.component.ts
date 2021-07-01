import { TodoService } from './../../services/todo.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: { title: string, category: string }[] = [
    {
      title: 'radi',
      category: 'work'
    }
  ];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getItems();
  }

  getItemsByCategory(category: string) {
    return this.todoService.getByCategory(category)
  }

  removeToDo(title: string) {
    this.todoService.remove(title)
  }
}
