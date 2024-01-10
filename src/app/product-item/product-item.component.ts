import { Product } from './../shared/product.service';
import { Component, Input } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent {
  @Input() product!: Product;
}
