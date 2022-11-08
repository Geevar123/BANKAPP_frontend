import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname: any
  acn: any
  psw: any

  constructor(private ds: DataService,private router:Router) { }
  

  ngOnInit(): void {
  }

  register() {
    var uname = this.uname   //this step is used to avoid frequently calling this.uname ,by  using this we only need to call uname
    var acn = this.acn
    var psw = this.psw

    const result = this.ds.register(acn, uname, psw)

    if(result){
      alert('Successfully Registered')

      this.router.navigateByUrl('')
    }
    else{
      alert('User exist')
    }
  }

}
