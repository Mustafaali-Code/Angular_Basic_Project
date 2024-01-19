import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";


export class Services {
  static Base_URL: string = "https://lively-duck-khakis.cyclic.app/api/institute";
  Auth_Base_URL: any = {
    login: "https://api.escuelajs.co/api/v1/auth/login",
    getData: "https://api.escuelajs.co/api/v1/auth/profile"
  }
  isAutentication: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  cards = []
  isLogIn = false
  http: HttpClient = inject(HttpClient)
  router: Router = inject(Router)
  constructor() {
    this.checkToken()
  }
  onSubscribe(msg: string) {
    alert(`Thank you for Subscribe ${msg}`)
  }
  getCartItems() {
    return this.cards
  }
  removeItem(id) {
    let filterData = this.cards.filter((card) => card._id !== id)
    this.cards = filterData
    console.log(filterData, this.cards)
    return filterData
  }
  onAddToCart(card) {
    let check = this.cards.find((c: any, index: number) => {
      if (c._id == card._id) {
        this.cards[index].count = this.cards[index].count + 1
        console.log(this.cards);
        return true;
      }
      return false;
    });

    if (!check) {
      console.log(this.cards);
      this.cards.push({
        ...card,
        count: 1
      });
    }
  }
  decrease(card) {
    this.cards.find((c, index) => {
      if (c._id == card._id) {
        if (c.count > 1) {
          console.log("object")
          this.cards[index].count = this.cards[index].count - 1
        } else {
          console.log("object22")
          let filterData = this.cards.filter((item) => item._id !== card._id)
          this.cards = filterData
        }
      }
    })
    console.log(this.cards)
  }
  // Login(user) {
  //   let userCheck = this.users.filter(u => u.name === user.name
  //     && u.password === user.password)

  //     if(userCheck){
  //       this.isLogIn = true
  //     }
  //     return this.isLogIn
  // }
  // checkLogin() {
  //   return this.isLogIn
  // }

  Login(user) {
    this.http.post(this.Auth_Base_URL.login, user).subscribe((response: any) => {
      localStorage.setItem("token", response.access_token)
      this.router.navigateByUrl('profile')
    })
  }

  checkToken() {
    let token = localStorage.getItem("token")
    if (token) {
      this.isAutentication.next(true)
    } else {
      this.isAutentication.next(false)
    }
  }
  getToken() {
    return localStorage.getItem("token")
  }
  checkLogin() {
    return localStorage.getItem("token")
  }
}