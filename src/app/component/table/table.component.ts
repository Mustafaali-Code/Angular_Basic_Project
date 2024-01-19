import { Component } from '@angular/core';
import { User } from '../model/User.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  data: User[] = [
    {
      name: "Mark",
      date: new Date(),
      gender: "male",
      fee: 15000.25265966
    },
    {
      name: "Merry",
      date: new Date(),
      gender: "female",
      fee: 9000.25265966
    },
    {
      name: "John",
      date: new Date(),
      gender: "male",
      fee: 50000.25265966
    },
    {
      name: "Sana",
      date: new Date(),
      gender: "female",
      fee: 52205.25265966
    },
  ]
  showUser: {} = {}
  open: boolean
  selector: string = "all"
  totalStudent= new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(this.data.length)
    },1000)
  })

  closeModal(e) {
    this.open = !e
  }
  showData(e) {
    this.showUser = e
    this.open = true
  }
}
