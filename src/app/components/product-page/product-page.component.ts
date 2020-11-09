import { BasketService } from './../../services/basket.service';
import { Basket } from './../../models/basket.model';
import { ProductType } from './../../util/product-type';
import { User } from 'src/app/models/user.model';
import { UserService } from './../../services/user.service';
import { Product } from './../../models/product.model';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  currentUser: User;
  currentSearch: string;
  currentProductType: string;
  currentBasket: Basket;
  allProductTypes: string[];
  searchedProducts: Product[];
  noProductsFound: boolean;

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private basketService: BasketService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.noProductsFound = false;
    this.allProductTypes = this.getAllProductTypes();
    this.currentProductType = ProductType.BOOKS;
    const id: number = +this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.router.navigate(['/login']);
    } else {
      this.userService.getUserById(id).subscribe((user: User) => {
        if (!user) {
          this.router.navigate(['/login']);
        } else {
          this.currentUser = user;
          this.createNewBasket();
        }
      });
    }
  }

  private createNewBasket(): void {
    this.currentBasket = new Basket();
    this.currentBasket.userId = this.currentUser.id;
    this.currentBasket.products = [];
  }

  public getProductsByNameAndType(name: string, type: string): void {
    this.productService.getProductsByNameAndType(name, type).subscribe((products: Product[]) => {
      if (products.length > 0) {
        this.searchedProducts = products;
        this.noProductsFound = false;
      } else {
        this.searchedProducts = null;
        this.noProductsFound = true;
      }
      this.currentSearch = null;
      this.currentProductType = ProductType.BOOKS;
    });
  }

  public addProductToBasket(product: Product): void {
    if (this.currentBasket.products.map((existingProduct: Product) => existingProduct.id).includes(product.id)) {
      alert('Error: This product is already in your basket')
    } else {
      this.currentBasket.products.push(product);
    }
  }

  public removeProductFromBasket(product: Product): void {
    const index = this.currentBasket.products.indexOf(product);
    this.currentBasket.products.splice(index, 1)
  }

  public saveBasket(): void {
    this.basketService.createBasket(this.currentBasket).subscribe((basket: Basket) => {
      console.log(basket);
      alert('Thank you, your basket has been saved');
      this.createNewBasket();
      this.searchedProducts = null;
    })
  }
  public getAllProductTypes(): string[] {
    const strings: string[] = [];
    for(const value in ProductType ) {
      if (value != null) {
        strings.push(value);
      }
    }
    return strings;
  }


}
