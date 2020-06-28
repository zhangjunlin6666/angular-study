/*
 * @Author: jackson
 * @Date: 2020-06-15 14:40:33
 * @LastEditors: jackson
 * @LastEditTime: 2020-06-15 14:41:35
 */ 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {

constructor(
  private http: HttpClient
) { }
  items = [];
  
  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}
