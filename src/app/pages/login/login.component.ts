import { BaseClass } from './../../shared/common/baseClass';
import { Component, OnInit, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent extends BaseClass implements OnInit {
  password = 'password';
  isPassword: boolean = true;
  userData: any = {};
  strMsg: string;
  errorMessage: string = '';
  formSubmitAttempt: boolean = false;
  iconShow: boolean = false;
  isBadCredential: boolean = false;
  loginForm: FormGroup;

  public validation_messages = {
    'username': [
      { type: 'required', message: 'Please enter username' },
      { type: 'maxlength', message: 'username must be between 2 to 50 characters' },
      { type: 'pattern', message: 'username must be between 2 to 50 characters' },

    ],
    'password': [
      { type: 'required', message: 'Please enter password' },
      { type: 'minlength', message: 'password must be between 2 to 50 characters' }
    ]
  };
  constructor(private fb: FormBuilder,
    public override injector: Injector,) {
    super(injector);
    this.strMsg = '';
  }

  ngOnInit(): void {
   this.initializeLoginForm();
  }

  initializeLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.maxLength(51)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    });
  }

  login(loginForm: FormGroup) {
    this.formSubmitAttempt = true;
  }
}
