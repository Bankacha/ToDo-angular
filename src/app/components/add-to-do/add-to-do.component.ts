import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.scss'],
})
export class AddToDoComponent implements OnInit {
  inputValue: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  addTodo() {
    if (this.inputValue) {
      this.todoService.add(this.inputValue);
      this.inputValue = '';
    }
  }
}
