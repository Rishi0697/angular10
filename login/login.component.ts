import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor( ) { }

  ngOnInit(): void {
   
    }
loginForm = new FormGroup({
  email : new FormControl('', [Validators.required, Validators.email]),
  password : new FormControl('', [Validators.required, Validators.minLength(5)])
})
  
  login(){

  }
  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }

}
