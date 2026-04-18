import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from './components/item-component/item';
import { ItemComponent } from './components/item-component/item-component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, ItemComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  Title = "Todo App";

  filter: "all" | "active" | "done" = "all";

  allItems: Item[] = [
    {description: "Eat breakfast", done: true},
    {description: "Eat dinner", done: false},
    {description: "Brush teeth", done: false},
    {description: "Go to bed early", done: false},
  ];

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }

  addItem(description: string) {
    if(!description) return;

    this.allItems.unshift(
      {description, done: false}
    );
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
