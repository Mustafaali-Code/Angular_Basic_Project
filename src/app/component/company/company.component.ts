import { CommonModule } from '@angular/common';
import { Component ,Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent implements OnInit {
  
  constructor(){}
  // @Input() data:any
  ngOnInit(): void {
    
  }

}
