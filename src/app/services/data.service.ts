import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // redendent data

  userDetails: any = {
    1000: { acn: 1000, username: "amal", password: 123, balance: 0 },
    1001: { acn: 1001, username: "anu", password: 123, balance: 0 },
    1002: { acn: 1002, username: "arun", password: 123, balance: 0 },
    1003: { acn: 1003, username: "mega", password: 123, balance: 0 }
  }

  constructor() { }

  // storing values here instead of creating it in the register ts bcause these fn has direct relation with data base

  // register form logic

  register(acn: any, username: any, password: any) {
    var userDetails = this.userDetails

    if (acn in userDetails) {
      return false
      // alert('User exist')
    }
    else {
      userDetails[acn] = { acn, username, password, balance: 0 }
      console.log(userDetails);
      return true
    }
  }

  // Login Form logic

  login(acn: any, psw: any) {
    var userDetails = this.userDetails

    if (acn in userDetails) {     //to check acn is present in userDetailes
      if (psw == userDetails[acn]['password']) {  //checking entered password with the password in database -we must use[]to take data of class
        return true
      }
      else {
        alert('Incorrect Password')
        return false
      }
    }
    else {
      alert('User not exist')
      return false
    }
  }

  // Deposit form logic

  deposit(acn: any, psw: any, amnt: any) {
    let userDetails = this.userDetails
    // convert string type amnt from input into integar by using parseInt
    var amount = parseInt(amnt)   //converting string into int
    if (acn in userDetails) {  //checking scn in userdetailes
      if (psw == userDetails[acn]['password']) {   //checking password in acn of userdetails
        userDetails[acn]['balance'] += amount  //updating balance by adding deposited amount 
        return userDetails[acn]['balance']   //returning updated balace
      }
      else {
        alert('Incorrect Password')
        return false
      }
    }
    else {
      alert("Incorrect Acc/No.")
      return false
    }
  }

  // Withdraw Form logic
  withdraw(acn: any, psw: any, amnt: any) {
    let userDetails = this.userDetails
    var amount = parseInt(amnt)
    if (acn in userDetails) {
      if (psw == userDetails[acn]['password']) {
        if (amount <= userDetails[acn]['balance']){
          userDetails[acn]['balance'] -= amount
          return userDetails[acn]['balance']
        }
        else{
          alert('Insufficient Balance')
          return false
        }
      }
      else {
        alert('Incorrect password')
        return false
      }
    }
    else {
      alert('Incorrect Acc/No.')
      return false
    }
  }

}

