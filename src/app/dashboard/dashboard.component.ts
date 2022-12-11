import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user:any

  acn: any
  psw: any
  amnt: any

  acn1: any
  psw1: any
  amnt1: any

  constructor(private ds: DataService,private router:Router) {
    this.user=this.ds.currentuser
   }

  ngOnInit(): void {
    if(!localStorage.getItem('currentAcn')){
      alert('Session Expired, Please login again')
      this.router.navigateByUrl('');
    }
  }
  deposit() {
    var acn = this.acn
    var psw = this.psw
    var amnt = this.amnt

    const result = this.ds.deposit(acn, psw, amnt)

    if (result) {
      alert(`${amnt} is credited in your Account & the available balance is Rs.${result}`)
    }
  }
  withdraw() {
    var acn1 = this.acn1
    var psw1 = this.psw1
    var amnt1 = this.amnt1
    
    const result=this.ds.withdraw(acn1,psw1,amnt1)

    if(result){
      alert(`${amnt1} is debited from your Account & the available balance is Rs.${result}`)

    }
  }
  logout(){
    // remove current Acc/ and current uname
    localStorage.removeItem('currentAcn')
    localStorage.removeItem('currentUser')
    this.router.navigateByUrl('')
  }
  delete(){
    // assigning current Acc/ into acn from localStorage
    this.acn=JSON.parse(localStorage.getItem('currentAcn')||'');
  }

}
