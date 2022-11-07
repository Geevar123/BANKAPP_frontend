import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  acn:any
  psw:any

  aim="Your Perfect Banking Partner"
  data="Enter Acc/No."
 
  userDetails:any={
    1000:{acn:1000,username:"amal",password:123,balance:0},
    1001:{acn:1001,username:"anu",password:123,balance:0},
    1002:{acn:1002,username:"arun",password:123,balance:0},
    1003:{acn:1003,username:"mega",password:123,balance:0}
  }

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    var acn=this.acn   //(should provide variable type in the begining)
    var psw=this.psw
    var userDetails=this.userDetails

    if(acn in userDetails){     //to check acn is present in userDetailes
      if(psw==userDetails[acn]['password']){  //checking entered password with the password in database -we must use[]to take data of class
        alert('Login Success')
      }
      else{
        alert("Incorrect Password")
      }
    }
    else{
      alert('User not exist')
    }
  }

  acnChange(event:any){
    this.acn=event.target.value     //---to store value first we have have to declare the variable(acn) in class with data type as acn:any 
    // console.log(this.acn);
  }
  pswChange(event:any){
    this.psw=event.target.value    //---to store value first we have have to declare the variable(psw) in class with data type as psw:any
    // console.log(this.psw);
    
  }

}
