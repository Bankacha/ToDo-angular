import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private categories: any[] = [
    {
      id: 'HOME',
      title: 'Home',
    },
    {
      id: 'WORK',
      title: 'Work',
    },
    {
      id: 'LIFE',
      title: 'Life',
    },
  ];

  constructor() {}

  getCategories() {
    return this.categories
  }
}
