import { AsyncPipe, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { BasketService } from '../basket.service';
import { OrderTotalsComponent } from '../order-totals/order-totals.component';
import { BasketItem } from '../models/basket';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, CurrencyPipe, OrderTotalsComponent],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss',
})
export class BasketComponent {
  constructor(public basketService: BasketService) {}

  incrementQuantity(item: BasketItem) {
    this.basketService.addItemToBasket(item);
  }
  removeItem(id: number, quantity: number) {
    this.basketService.removeItemFromBasket(id, quantity);
  }
}
