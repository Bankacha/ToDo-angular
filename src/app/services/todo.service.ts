import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly maxTodos = 10;

  private items: { title: string, category: string }[] = [];

  constructor() { }

  getItems(): { title: string, category: string }[] {
    return this.items;
  }

  add(item: { title: string, category: string }): void {
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



// type myType = {
  // title: string;
  // category: string;
// }