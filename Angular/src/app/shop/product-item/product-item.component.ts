import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BasketService } from '../../basket.service';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CurrencyPipe, RouterModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent {
  @Input() product?: Product;

  constructor(private basketService: BasketService) {}

  addItemToBasket() {
    this.product && this.basketService.addItemToBasket(this.product);
  }
}
