import { Injectable } from '@angular/core';
import { myType } from '../models';

@Injectable({
  providedIn: 'root',
})

export class TodoService {
  private readonly maxTodos = 10;

  private items: myType[] = [];

  constructor() { }

  getItems(): myType[] {
    return this.items;
  }

  add(item: myType): void {
    if (!this.maxItemsReached()) {
      this.items.push(item);
    }
  }

  remove(title: string): void {
    this.items = this.items.filter( item => item.title !== title)
  }

  maxItemsReached(): boolean {
    return this.items.length >= this.maxTodos;
  }

  getByCategory(category: string) {
    return this.items.filter( item => item.category === category)
  }
}



