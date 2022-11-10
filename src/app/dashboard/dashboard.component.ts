import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  acn: any
  psw: any
  amnt: any

  acn1: any
  psw1: any
  amnt1: any

  constructor(private ds: DataService) { }

  ngOnInit(): void {
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

}
