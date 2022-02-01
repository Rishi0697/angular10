import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
    
  }

  signupForm = new FormGroup({
    fname: new FormControl('',[Validators.required]),
    lname: new FormControl('',[Validators.required]),
    user : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(5)]),
  })
  //  signup:(e:any) {
  //   e.preventDefault();
  
  // }
  signup(){
    console.log(this.signupForm.value)
  }
  get fname(){
    return this.signupForm.get('fname');
  }
  get lname(){
    return this.signupForm.get('lname');
  }
  get user(){
    return this.signupForm.get('user');
  }
  get password(){
    return this.signupForm.get('password');
  }

  // const validation: {user:}
  userName:String = "";
  validation(){
    localStorage.setItem('key', JSON.stringify(this.userName));
    alert("registerd SuccessFully");
  }
// let userName:object={
//   username ,
//   password: any
// }


}
