import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  hide: boolean = true;

  constructor(private formBuilder: FormBuilder, private _router: Router) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  get lf() {
    return this.loginForm.controls;
  }

  get rf() {
    return this.registerForm.controls;
  }

  // This would be updated by whoever handles the database login function to login only when valid credentials are entered
  login() {
    this._router.navigate(['dashboard']);
  }

  register() {
    this._router.navigate(['dashboard']);
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
}
