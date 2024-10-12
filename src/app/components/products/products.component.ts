import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Category } from '../../models/category';
import { getEnabledCategories } from 'trace_events';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: Product[];
  categories: Category[] = [];
  totalOrderPrice: number = 0;
  selectedCatId: number = 0;
  constructor() {
    this.products = [
      {
        id: 100,
        name: 'Dell laptop',
        price: 500000,
        quantity: 3,
        imgUrl: 'https://fakeimg.pl/300/',
        catId: 1,
      },
      {
        id: 101,
        name: 'hp laptop',
        price: 200000,
        quantity: 0,
        imgUrl: 'https://fakeimg.pl/300/',
        catId: 1,
      },
      {
        id: 102,
        name: 'IPhone',
        price: 15000,
        quantity: 2,
        imgUrl: 'https://fakeimg.pl/300/',
        catId: 2,
      },
      {
        id: 103,
        name: 'Relme c 25',
        price: 10000,
        quantity: 1,
        imgUrl: 'https://fakeimg.pl/300/',
        catId: 2,
      },
      {
        id: 104,
        name: 'oppo',
        price: 15000,
        quantity: 2,
        imgUrl: 'https://fakeimg.pl/300/',
        catId: 3,
      },
      {
        id: 105,
        name: 'lenevo',
        price: 10000,
        quantity: 1,
        imgUrl: 'https://fakeimg.pl/300/',
        catId: 3,
      },
    ];
    this.categories = [
      { id: 1, name: 'laptop' },
      { id: 2, name: 'Phone' },
      { id: 3, name: 'Tablet' },
    ];
  }

  buy(count: string, price: number) {
    this.totalOrderPrice += +count * price;
  }
  change() {
    this.selectedCatId = 3;
  }
}
