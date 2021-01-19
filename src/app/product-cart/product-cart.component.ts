import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {
 products = [];
 searchResults = [];
 serachedKey = "";
 isSearch: boolean = false;
 isRecentlyView: boolean = false;
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.isRecentlyView = this.products.filter((prod) => prod.viewed).length ? true : false;
  }

  onSearch() {
    if(this.serachedKey) {
      this.searchResults =  this.productService.updateAndGetProducts(this.serachedKey);
      this.isRecentlyView = this.products.filter((prod) => prod.viewed).length ? true : false;
      this.isSearch = true;
    } else {
      this.isSearch = false;
    }
  }

  clearRecentList() {
    this.productService.clearRecentList();
    this.isRecentlyView = false;
  }

}
