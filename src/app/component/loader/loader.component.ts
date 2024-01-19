import { Component, Input, inject } from '@angular/core';
import { Router ,Event, NavigationStart, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {
  @Input() showLoader = false
  router:Router = inject(Router)
  ngOnInit(){
    this.router.events.subscribe((routerEvent:Event)=>{
      if(routerEvent instanceof NavigationStart ){
        this.showLoader = true
      }
      if(routerEvent instanceof NavigationEnd ){
        this.showLoader = false
      }
    })
  }
}
