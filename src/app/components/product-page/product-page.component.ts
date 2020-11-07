import { Product } from './../../models/product.model';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductsByNameAndType('Harry', 'Books');
  }

  getProductsByNameAndType(name: string, type: string): void {
    this.productService.getProductsByNameAndType(name, type).subscribe((products: Product[]) => {
      if (products.length > 0) {
        console.log(products);
      } else {
        console.log('No Products Found With This Name And Type');
      }
    });
  }
}
