import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: any

  acn: any
  psw: any
  amnt: any

  acn1: any
  psw1: any
  amnt1: any

  sdate: any;

  depositForm = this.fb.group({
    acn: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9\._*@]+')]],
    amnt: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })

  withdrawForm = this.fb.group({
    acn1: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw1: ['', [Validators.required, Validators.pattern('[0-9\._*@]+')]],
    amnt1: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })

  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) {
    // this.user=this.ds.currentuser
    if(localStorage.getItem('currentuser')){
      this.user = JSON.parse(localStorage.getItem('currentuser') || '');
    }
    this.sdate = new Date()
  }

  ngOnInit(): void {
    if(!localStorage.getItem('currentuser')){
      alert('Session Expired, Please login again')
      this.router.navigateByUrl('');
    }
    this.user = JSON.parse(localStorage.getItem('currentuser') || '');
    console.log(this.user);

  }

  // Deposit 

  deposit() {
    var acn = this.depositForm.value.acn
    var psw = this.depositForm.value.psw
    var amnt = this.depositForm.value.amnt

    if (this.depositForm.valid) {
      this.ds.deposit(acn, psw, amnt)
        .subscribe((result: any) => {
          alert(result.message)
        },
          result => {
            alert(result.error.message)
          })
    }
  }

  // Withdraw

  withdraw() {
    var acn1 = this.withdrawForm.value.acn1
    var psw1 = this.withdrawForm.value.psw1
    var amnt1 = this.withdrawForm.value.amnt1
    if (this.depositForm.valid) {
      this.ds.withdraw(acn1, psw1, amnt1)
        .subscribe((result: any) => {
          alert(result.message)
        },
          result => {
            alert(result.error.message)
          })
    }
  }
  //   var acn1 = this.acn1
  //   var psw1 = this.psw1
  //   var amnt1 = this.amnt1

  //   const result = this.ds.withdraw(acn1, psw1, amnt1)

  //   if (result) {
  //     alert(`${amnt1} is debited from your Account & the available balance is Rs.${result}`)

  //   }
  // }
  logout() {
    // remove current Acc/ and current uname
    localStorage.removeItem('currentacn')
    localStorage.removeItem('currentuser')
    localStorage.removeItem('token')
    this.router.navigateByUrl('')
  }
  delete() {
    // assigning current Acc/ into acn from localStorage
    this.acn = JSON.parse(localStorage.getItem('currentacn') || '');
  }
  onCancel() {
    this.acn = "";
  }
  onDelete(event: any) {
    // alert(event)
    this.ds.deleteAcc(event)
      .subscribe((result: any) => {
        alert(result.message)
        // this.router.navigateByUrl('');
        this.logout();
      },
        result => {
          alert(result.error.message)
        }
      )
  }
}
