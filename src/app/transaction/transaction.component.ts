import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  acn:any
  transaction:any

  constructor(private ds:DataService) {
    this.acn=JSON.parse(localStorage.getItem('currentacn')||'');
    this.ds.getTransaction(this.acn)
    .subscribe((result:any)=>{
      this.transaction=result.transaction
    },
    result=>{
      alert(result.error.message)
    })
   }
  

  ngOnInit(): void {
  }

}
