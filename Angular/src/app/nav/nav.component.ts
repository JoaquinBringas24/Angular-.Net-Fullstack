import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BasketService } from '../basket.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { BasketItem } from '../models/basket';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, NgIf, AsyncPipe],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  constructor(public basketService: BasketService) {}

  getCount(items: BasketItem[]) {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }
}
