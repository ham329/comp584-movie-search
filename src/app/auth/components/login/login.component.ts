import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService
  ) {}

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

  async login() {
    this.firebaseService.login(this.lf.email.value, this.lf.password.value);
    this.loginForm.reset();
  }
}
