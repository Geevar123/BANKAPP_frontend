import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

//globaly http header object
const options = {
  headers: new HttpHeaders(),
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentuser: any
  currentacn: any

  // redendent data

  userDetails: any = {
    1000: { acn: 1000, username: "amal", password: 123, balance: 0, transaction: [] },
    1001: { acn: 1001, username: "anu", password: 123, balance: 0, transaction: [] },
    1002: { acn: 1002, username: "arun", password: 123, balance: 0, transaction: [] },
    1003: { acn: 1003, username: "mega", password: 123, balance: 0, transaction: [] }
  }


  constructor(private http: HttpClient) {
    // this.getData();
  }

  saveData() {
    if (this.userDetails) {
      localStorage.setItem('database', JSON.stringify(this.userDetails))
    }
    if (this.currentuser) {
      localStorage.setItem('currentUser', JSON.stringify(this.currentuser))
    }
    if (this.currentacn) {
      localStorage.setItem('currentAcn', JSON.stringify(this.currentacn))
    }
  }

  // getData() {

  //   if (localStorage.getItem('database')) {
  //     this.userDetails = JSON.parse(localStorage.getItem('database') || '')  //  || '' must be there to get empty items
  //   }
  //   if (localStorage.getItem('currentUser')) {
  //     this.currentuser = JSON.parse(localStorage.getItem('currentUser') || '')  //  || '' must be there to get empty items
  //   }
  //   if (localStorage.getItem('currentAcn')) {
  //     this.currentacn = JSON.parse(localStorage.getItem('currentAcn') || '')  //  || '' must be there to get empty items
  //   }

  // }

  // storing values here instead of creating it in the register ts bcause these fn has direct relation with data base

  // register form logic

  register(acn: any, username: any, password: any) {

    const data = { acn, password, username }

    return this.http.post('http://localhost:3000/register', data)
    // var userDetails = this.userDetails

    // if (acn in userDetails) {
    //   return false
    //   // alert('User exist')
    // }
    // else {
    //   userDetails[acn] = { acn, username, password, balance: 0, transaction: [] }

    //   this.saveData()

    //   // console.log(userDetails);

    //   return true
    // }

  }

  // Login Form logic

  login(acn: any, password: any) {

    const data = { acn, password }

    return this.http.post('http://localhost:3000/login', data)


    // var userDetails = this.userDetails

    // this.currentuser = userDetails[acn]['username']  //caling username from userdetails into current user

    // if (acn in userDetails) {     //to check acn is present in userDetailes

    //   if (psw == userDetails[acn]['password']) {  //checking entered password with the password in database -we must use[]to take data of class
    //     this.currentacn = acn

    //     this.saveData()

    //     return true
    //   }
    //   else {
    //     alert('Incorrect Password')
    //     return false
    //   }
    // }
    // else {
    //   alert('User not exist')
    //   return false
    // }
  }

  // Get Token
  getToken() {
    // Fetch token from local storage
    const token = JSON.parse(localStorage.getItem('token') || '');
    // append token inside the header
    let headers = new HttpHeaders()

    if (token) {
      options.headers = headers.append('x-access-token', token)
    }
    return options //to get token

  }

  // Deposit form logic

  deposit(acn: any, password: any, amnt: any) {

    const data = { acn, password, amount: amnt }

    return this.http.post('http://localhost:3000/deposit', data, this.getToken())
  }
  //   let userDetails = this.userDetails
  //   // convert string type amnt from input into integar by using parseInt
  //   var amount = parseInt(amnt)   //converting string into int
  //   if (acn in userDetails) {  //checking acn in userdetailes
  //     if (psw == userDetails[acn]['password']) {   //checking password in acn of userdetails
  //       userDetails[acn]['balance'] += amount  //updating balance by adding deposited amount 

  //       // Add deposit detailes in transaction history
  //       //first taking transaction from userDetails and pushing new data into array here 'type' is key and 'CREDIT' is value 
  //       // llly amount is key and value itself so defined by'amount'
  //       userDetails[acn]['transaction'].push({ type: 'CREDIT', amount })

  //       this.saveData()

  //       return userDetails[acn]['balance']   //returning updated balace
  //     }
  //     else {
  //       alert('Incorrect Password')
  //       return false
  //     }
  //   }
  //   else {
  //     alert("Incorrect Acc/No.")
  //     return false
  //   }
  // }

  // Withdraw Form logic
  withdraw(acn: any, password: any, amnt: any) {

    const data = { acn, password, amount: amnt }

    return this.http.post('http://localhost:3000/withdraw', data, this.getToken())
  }
  
// Transaction

  getTransaction(acn: any) {
    const data = { acn }
    return this.http.post('http://localhost:3000/transaction', data, this.getToken())
  }

  // Delete Account

  deleteAcc(acn:any){
    return this.http.delete('http://localhost:3000/deleteAcc/'+acn)
  }
}

