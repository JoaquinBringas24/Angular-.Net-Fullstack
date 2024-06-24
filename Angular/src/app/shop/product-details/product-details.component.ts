import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { error } from 'console';
import { Product } from '../../models/product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterModule, CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {

  product?: Product;
  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {

    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) this.shopService.getProduct(+id).subscribe({
      next: product => this.product = product,
      error: error => console.log(error)
    });
  }
}
