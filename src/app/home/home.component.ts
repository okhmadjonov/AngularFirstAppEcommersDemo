import { ProductItemComponent } from './../product-item/product-item.component';
import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Product, ProductService } from '../shared/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
