import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
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

  constructor(private ds: DataService, private router: Router, private formBuilder: FormBuilder) { }

  // Create register form module
  registerForm = this.formBuilder.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    acn: ['', [Validators.required, Validators.pattern('[0-9]+')]],
     psw: ['', [Validators.required, Validators.pattern('[0-9\._*]+')]]
  })

  ngOnInit(): void {
  }

  register() {
    var uname = this.registerForm.value.uname   //this step is used to avoid frequently calling this.uname ,by  using this we only need to call uname
    var acn = this.registerForm.value.acn
    var psw = this.registerForm.value.psw

    // Checking valid or not
    if (this.registerForm.valid) {
      const result = this.ds.register(acn, uname, psw)

      if (result) {
        alert('Successfully Registered')

        this.router.navigateByUrl('')
      }
      else {
        alert('User exist')
      }
    }
    else {
      alert('Invalid Form')
    }
  }


}
