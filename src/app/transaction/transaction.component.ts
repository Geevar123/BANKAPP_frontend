import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  useracn:any
  transaction:any

  constructor(private ds:DataService) {
    this.useracn=this.ds.currentacn
    this.transaction = this.ds.getTransaction(this.useracn)

    // console.log(transaction);
    
   }
  ngOnInit(): void {
  }

}
