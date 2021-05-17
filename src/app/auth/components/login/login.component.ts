import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  hide: boolean = true;

  constructor(private formBuilder: FormBuilder, private _router: Router) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get lf() {
    return this.loginForm.controls;
  }

  getEmailErrorMessage() {
    return this.lf.email.hasError('required')
      ? 'You must enter a value'
      : this.lf.email.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  getPasswordErrorMessage() {
    return this.lf.password.hasError('required')
      ? 'You must enter a value'
      : this.lf.password.hasError('pattern')
      ? 'Not a valid password'
      : '';
  }

  login() {
    this._router.navigate(['dashboard']);
  }
}