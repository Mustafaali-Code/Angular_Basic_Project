import { Component } from '@angular/core';
import { CompanyComponent } from '../company/company.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CompanyComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(private router:Router) {}
   changeRoute(e:string){
    this.router.navigateByUrl(e);
    // console.log(e)
  }
}
