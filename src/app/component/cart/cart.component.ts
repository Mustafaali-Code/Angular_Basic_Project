import { Component, inject, OnInit } from '@angular/core';
import { Services } from '../service/Services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  data: any = []

  constructor() { }
  addToCart = inject(Services)
  removeCard(e) {
    this.data = this.addToCart.removeItem(e)
  }
  ngOnInit(): void {
    this.data = this.addToCart.getCartItems()
  }
  increase(card: {}) {
    this.addToCart.onAddToCart(card)
  }
  decrease(card: {}) {
    this.addToCart.decrease(card)
    this.data = this.addToCart.getCartItems()
  }
}
