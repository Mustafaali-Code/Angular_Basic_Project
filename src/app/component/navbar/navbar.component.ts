import { Component } from '@angular/core';
import { Services } from '../service/Services';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  constructor() {
  
  }
  call(e: string) {
    console.log(e)
  }
  Subscribe(){
    let subService = new Services()
    subService.onSubscribe("Mustafa")
  }
}


