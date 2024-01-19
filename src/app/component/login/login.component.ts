import { Component, Injectable, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Services } from '../service/Services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
@Injectable({
  providedIn: 'root'
})
export class LoginComponent {
  loginForm: FormGroup;
  formBuilder: FormBuilder = inject(FormBuilder)
  Login = inject(Services)
  router = inject(Router)
  constructor() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  onSubmit() {
     this.Login.Login(this.loginForm.value)  
  }
}
