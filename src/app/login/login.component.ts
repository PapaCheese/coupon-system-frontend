import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit{
  @ViewChild('form') loginForm: NgForm;
  clientTypes = ['Customer', 'Company', 'Admin'];
  user: string;
  pass: string;
  type: string;
  constructor(private loginServ: LoginService, private router: Router) {
  }
  loginSuccess: boolean;
  loginStatus: string;

  ngOnInit(): void {
    this.loginServ.logout().subscribe();
  }

  onSubmit() {
    this.user = this.loginForm.value.userData.username;
    this.pass = this.loginForm.value.userData.password;
    this.type = this.loginForm.value.userData.clientType;
    this.loginServ.login(this.user, this.pass, this.type).subscribe(boo => {
      this.loginSuccess = boo;
      console.log(this.loginSuccess);
      if (this.loginSuccess) {
        switch (this.type) {
          case 'Admin':
            this.router.navigate(['/', 'admin', 'coupons']);
            return;
          case 'Company':
            this.router.navigate(['/', 'company', 'my-coupons']);
            return;
          case 'Customer':
            this.router.navigate(['/', 'customer', 'coupons']);
        }
      }
    },
      err => {
        console.error(err.error.message);
        this.loginStatus = err.error.message;
      }
    )
  }
}