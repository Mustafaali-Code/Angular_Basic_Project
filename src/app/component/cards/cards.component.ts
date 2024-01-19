import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  text = ""
  editdata: {} = ""
  editIndex: any = ""
  count: number = 1
  data = ["ball", "water", "egg"]
  toggle = true
  display: boolean = true
  product = {
    name: "iPhone",
    price: 200000,
    color: 'Gray',
    discount: 50,
    inStock: 5,
    image: "assets/images/Iphone.jpg",
  }

  Toggle() {
    this.toggle = !this.toggle
  }
  adders(e: string): void {
    console.log("object", this.editIndex == false);
    if (this.editIndex !== undefined && this.editIndex !== "") {
      let index = Number(this.editIndex); // Convert editIndex to a number
      if (!isNaN(index) && index >= 0 && index < this.data.length) {
        this.data[index] = e;
        this.editIndex = "";
        this.editdata = {};
      }
    } else {
      if (e) {
        this.data.push(e);
      }
    }
  }

  delete(e: any) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        let filter = this.data.filter((item, index) => index !== e)
        this.data = filter
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
  
  editText(e: any) {
    this.editdata = e
    this.editIndex = e.id
  }

  setText(val: string) {
    console.log(val)
  }
  decrease() {
    if (this.count > 1) {
      this.count--
    } else {
      this.display = true
    }
  }
  buy() {
    this.display = false
  }
  increase() {
    if (this.product.inStock > this.count) {
      this.count++
    }
  }
  getDiscount() {
    return this.product.price - (this.product.price * this.product.discount / 100)
  }

}
