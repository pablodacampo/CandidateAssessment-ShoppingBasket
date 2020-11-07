import { Product } from './../models/product.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient ) {
  }

  private productsUrl = 'api/products';

  public getProductsByNameAndType(name: string, type: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.productsUrl}/?name=${name}&type=${type}`);
  }

}
