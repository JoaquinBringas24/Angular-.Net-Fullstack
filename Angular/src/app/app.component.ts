import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ShopComponent } from './shop/shop.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgxSpinnerModule,
    RouterOutlet,
    NavComponent,
    ShopComponent,
    SectionHeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Angular';

  constructor(private basketService: BasketService) {}
  ngOnInit(): void {
    const basketId = localStorage.getItem('basket_id');
    if (basketId) this.basketService.getBasket(basketId);
  }
}
