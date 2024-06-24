import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from '../models/product';
import { ShopService } from './shop.service';
import { ProductItemComponent } from './product-item/product-item.component';
import { Brand } from '../models/brand';
import { Type } from '../models/type';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ShopParams } from '../models/shopParams';
import { PagingHeaderComponent } from '../paging-header/paging-header.component';
import { PagerComponent } from '../pager/pager.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    ProductItemComponent,
    PagingHeaderComponent,
    PagerComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit{
  @ViewChild('search') searchTerm?: ElementRef;
  products: Product[] = [];
  brands: Brand[] = [];
  types: Type[] = [];
  shopParams = new ShopParams();
  sortOptions = [
    {name: "Alphabetical", value:"name"},
    {name: "Price: Low to high", value:"priceAsc"},
    {name: "Price: High to low", value:"priceDesc"},
  ];

  totalCount = 0;

  constructor(private shopServices: ShopService) {

  };

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  getProducts() {
    this.shopServices.getProducts(this.shopParams).subscribe({
      next: response => {
        this.products = response.data;
        this.shopParams.pageNumber = response.pageIndex;
        this.shopParams.pageSize = response.pageSize;
        this.totalCount = response.count;
      },
      error: error => console.log(error)
    });
  }
  getBrands() {
    this.shopServices.getBrands().subscribe({
      next: response => this.brands = [{id: 0, name: "All"}, ...response],
      error: error => console.log(error)
    });
  }
  getTypes() {
    this.shopServices.getTypes().subscribe({
      next: response => this.types = [{id:0, name:"All"}, ...response],
      error: error => console.log(error)
    });
  }

  onBrandSelected(brandId: number) {
    this.shopParams.brandId = brandId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onTypeSelected(typeId: number) {
    this.shopParams.typeId = typeId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onSortSelected(event: any) {
    this.shopParams.sort = event.target.value;
    this.getProducts();
  }

  onPageChanged(event: any) {
    if (this.shopParams.pageNumber !== event) {
      this.shopParams.pageNumber = event;
      this.getProducts();
    }
  }

  onSearch() {
    this.shopParams.search = this.searchTerm?.nativeElement.value;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onReset() {
    if (this.searchTerm) this.searchTerm.nativeElement.value = '';
    this.shopParams = new ShopParams();
    this.getProducts();
  }

}
