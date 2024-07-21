import { Component } from '@angular/core';
import { BasketService } from '../basket.service';
import { AsyncPipe, CurrencyPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-order-totals',
  standalone: true,
  imports: [CurrencyPipe, AsyncPipe, NgIf],
  templateUrl: './order-totals.component.html',
  styleUrl: './order-totals.component.scss',
})
export class OrderTotalsComponent {
  constructor(public basketService: BasketService) {}
}
