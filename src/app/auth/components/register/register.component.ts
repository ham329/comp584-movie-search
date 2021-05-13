import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  hide: boolean = true;

  constructor(private formBuilder: FormBuilder, private _router: Router) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  get rf() {
    return this.registerForm.controls;
  }

  register() {
    this._router.navigate(['dashboard']);
  }

  getEmailErrorMessage() {
    return this.rf.email.hasError('required')
      ? 'You must enter a value'
      : this.rf.email.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  getPasswordErrorMessage() {
    return this.rf.password.hasError('required')
      ? 'You must enter a value'
      : this.rf.password.hasError('pattern')
      ? 'Not a valid password'
      : '';
  }
}