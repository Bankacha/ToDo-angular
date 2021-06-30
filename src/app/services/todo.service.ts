import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly maxTodos = 5;

  private items: string[] = [];

  constructor() {}

  getItems(): string[] {
    return this.items;
  }

  add(item: string): void {
    if (!this.maxItemsReached()) {
      this.items.push(item);
    }
  }

  remove(idx: number): void {
    this.items.splice(idx, 1);
  }

  maxItemsReached(): boolean {
    return this.items.length >= this.maxTodos;
  }
}
