import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from './item';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  componentTitle = 'To-do';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'Eat', done: true },
    { description: 'Sleep', done: false },
    { description: 'Play', done: false },
    { description: 'Laugh', done: false },
  ];

  get items() {
    if (this.filter === 'all') return this.allItems;

    return this.allItems.filter((item) =>
      this.filter === 'done' ? item.done : !item.done
    );
  }

  addItem(description: string) {
    if (!description) return;
    this.allItems.unshift({
      description: description,
      done: false,
    });
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
