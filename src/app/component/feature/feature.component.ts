import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Services } from '../service/Services';
import { Router } from '@angular/router';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.css'
})
export class FeatureComponent implements OnInit {

  private apiUrl = 'https://lively-duck-khakis.cyclic.app/api/card';
  data: any = [];
  count_check: boolean = true
  count: number = 1
  loader = true

  constructor(private http: HttpClient, private router: Router) { }

  addCartService = inject(Services)

  ngOnInit() {
    this.getData()
  }
  getUpdateData(card) {

    // First Way start //
    // let update = this.addCartService.getCartItems()
    //    update.find((c, index) => {
    //     console.log(c, card)
    //   if (c._id == card._id) {
    //     this.data[card.id -1] = update[index]
    //   }
    // })
    // First Way end //

    // Second Way start //
    let update = this.addCartService.getCartItems()
    update.find((c, index) => {
      if (c._id == card._id) {
        this.data[card.id - 1] = {
          ...this.data[card.id - 1],
          count: update[index].count
        }
      }
    })
    console.log(this.data)
    // Second Way end //

  }
  addToCart(card: {}) {
    this.addCartService.onAddToCart(card)
    this.getUpdateData(card)
  }
  decrease(card: {}) {
    this.addCartService.decrease(card)
    this.getUpdateData(card)
    // this.data = this.addCartService.getCartItems()
  }
  increase(card: {}) {
    this.addCartService.onAddToCart(card)
    this.getUpdateData(card)
  }
  click() {
    this.router.navigateByUrl('/cart_item')
    // console.log(this.addCartService.getCartItems())
  }
  getData() {
    this.http.get(this.apiUrl).subscribe((res: any) => {
      this.data = res.data
      this.loader = false
    },
      (error) => {
        console.error(error);
        this.loader = false
      })
  }
}
