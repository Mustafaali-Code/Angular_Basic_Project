import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Services } from '../service/Services';

@Component({
  selector: 'app-institute',
  templateUrl: './institute.component.html',
  styleUrl: './institute.component.css'
})
export class InstituteComponent implements OnInit {
  private baseURL = Services.Base_URL
  data: any[] = [];
  open = false
  title: string
  body: string
  loader = true
  deleteId: string = ""

  constructor(private http: HttpClient, private router: Router) { }

  close(e: boolean) {
    this.open = !e
  }
  ngOnInit(): void {
    this.handleGetData()
  }
  handleGetData() {
    this.http.get(this.baseURL).subscribe((res: any) => {
      this.data = res.data
      this.loader = false
    },
    (error) => {
      console.error(error);
      this.loader = false
    })
  }
  handleEdit(e: any) {
    // this.router.navigate(['/post', e]);
    this.router.navigate(['/post'],{state:e});
    // console.log(e)
    // this.http.put(`${this.baseURL}/${e._id}`,{e}).subscribe((res)=>{
    //   console.log(res)
    // },(e)=>{
    //   console.log(e)
    // })
  }
  handleDelete(e) {
    this.title = `Delete the ${e.name}`
    this.body = 'Are you sure you want to delete?'
    this.open = true
    this.deleteId = e._id

  }
  deleteConfirm(e: boolean) {
    console.log(e)
    if (e) {
      this.http.delete(`${this.baseURL}/${this.deleteId}`).subscribe(() => {
        console.log("Data Successfully Deleted")
        let filterData = this.data.filter((item) => item._id !== this.deleteId)
        this.data = filterData
      }, (error) => {
        console.log(error)
      })
    }
  }
  Subscribe() {
    let sub_Service = new Services()
    sub_Service.onSubscribe("Mustafa with Institute")
  }
  postData() {
    this.router.navigateByUrl("post")
  }

}
