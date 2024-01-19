// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-employees',
//   standalone: true,
//   imports: [],
//   templateUrl: './employees.component.html',
//   styleUrl: './employees.component.css'
// })
// export class EmployeesComponent {
//   tab: string = ""
//   onHamza() {
//     this.tab =  "Hamza"    
//   }
//   onSufiyan() {
//     this.tab =  "Sufiyan"    
//   }
//   onTahir() {
//     this.tab =  "Tahir"
//   }
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  tab: string = "";

  onHamza() {
    this.tab = "Hamza";
  }

  onSufiyan() {
    this.tab = "Sufiyan";
  }

  onTahir() {
    this.tab = "Tahir";
  }
}
