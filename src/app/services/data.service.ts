import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  // redendent data
  
  userDetails:any={
    1000:{acn:1000,username:"amal",password:123,balance:0},
    1001:{acn:1001,username:"anu",password:123,balance:0},
    1002:{acn:1002,username:"arun",password:123,balance:0},
    1003:{acn:1003,username:"mega",password:123,balance:0}
  }

  constructor() { }

  // storing values here instead of creating it in the register ts bcause these fn has direct relation with data base

  register(acn:any,username:any,password:any)
  {
    var userDetails=this.userDetails

    if(acn in userDetails){
      return false
      // alert('User exist')
    }
    else{
      userDetails[acn]={acn,username,password,balance:0}
      console.log(userDetails);
      return true
    }
  }


  login(acn:any,psw:any){
    var userDetails=this.userDetails
  
    if(acn in userDetails){     //to check acn is present in userDetailes
      if(psw==userDetails[acn]['password']){  //checking entered password with the password in database -we must use[]to take data of class
        return true
      }
      else{
        alert('Incorrect Password')
        return false
      }
    }
    else{
      alert('User not exist')
      return false
    }
  }

}

