import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Basket } from './../models/basket.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor(private http: HttpClient) { }

  public createBasket(basket: Basket): Observable<Basket> {
    return this.http.post<Basket>('api/baskets', basket, headers);
  }
}
