import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  acn: any
  psw: any

  aim = "Your Perfect Banking Partner"
  data = "Enter Acc/No."

  userDetails: any = {
    1000: { acn: 1000, username: "amal", password: 123, balance: 0 },
    1001: { acn: 1001, username: "anu", password: 123, balance: 0 },
    1002: { acn: 1002, username: "arun", password: 123, balance: 0 },
    1003: { acn: 1003, username: "mega", password: 123, balance: 0 }
  }
  // Dependency Injection below
  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }
  //this will work 1st; private: used to make it as private; router: its just an variable name 

  // create login form model
  loginForm = this.fb.group({
    acn: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9\._*]+')]]
  })


  ngOnInit(): void {     //then this will work 2nd
  }

  login() {
    var acn = this.loginForm.value.acn
    var psw = this.loginForm.value.psw



    if (this.loginForm.valid) {
      const result = this.ds.login(acn, psw)
      if (result) {
        alert('Login Success')
        this.router.navigateByUrl('dashboard')
      }
    }
    else {
      alert('Invalid Form')
    }
  }
}

// Login(a:any,b:any){
//   var acn=a.value
//   var psw=b.value
// }


// acnChange(event:any){
//   this.acn=event.target.value     to store value first we have have to declare the variable(acn) in class with data type as acn:any 
//   console.log(this.acn);
// }
// pswChange(event:any){
//   this.psw=event.target.value     to store value first we have have to declare the variable(psw) in class with data type as psw:any
//   console.log(this.psw);