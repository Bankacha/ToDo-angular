import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.scss'],
})
export class AddToDoComponent implements OnInit {
  inputValue: string = '';
  todoCategory : any = {id :'HOME', title:'Home'};
  categories: {id: string, title: string}[] = [];


  constructor(private todoService: TodoService, private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categories = this.categoriesService.getCategories()
    console.log(this.categories)
  }

  existing(input:string) : boolean {
    const todos = this.todoService.getItems();

    return todos.some( item => item.title === input)
  }

  addTodo() {
    const todo = {
      title: this.inputValue,
      category: this.todoCategory.title
    }
    console.log(this.existing(this.inputValue))

    if (this.inputValue && !this.existing(this.inputValue)) {
      this.todoService.add(todo);
      this.inputValue = '';
      console.log(this.inputValue)
    }
  }

  setCategory(id: string) {
    this.todoCategory = this.categories.find( item => item.id === id)
  }

}
