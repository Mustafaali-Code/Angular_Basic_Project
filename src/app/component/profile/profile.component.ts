import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Services } from '../service/Services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  constructor(private http: HttpClient, private route: Router, private authService: Services) { }
  ngOnInit(): void {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.authService.getToken()}`
    })
    this.http.get(this.authService.Auth_Base_URL.getData, { headers }).subscribe((response) => {
      console.log(response, "Unauthorized")
    }, (err) => {
      if (err.statusText == "Unauthorized") {
        // this.route.navigateByUrl("login")
      }
    })

  }

}
