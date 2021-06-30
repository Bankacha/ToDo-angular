import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.scss']
})
export class AddToDoComponent implements OnInit {

  todos: string[] = ['jedi', 'jebi', 'lezi', 'spavaj']

  inputValue:string = ''

  constructor() { }

  ngOnInit(): void {
  }

  addTodo() {
    if(this.inputValue) {
      this.todos.push(this.inputValue)
      this.inputValue = ''
    }
  }

}
