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
      { type: 'required', message: 'LOGIN.ERRORS.USERNAME.REQUIRED' },
      { type: 'maxlength', message: 'LOGIN.ERRORS.USERNAME.MAX_LENGTH' },
      { type: 'pattern', message: 'User name is not valid' },

    ],
    'password': [
      { type: 'required', message: 'LOGIN.ERRORS.PASSWORD.REQUIRED' },
      { type: 'minlength', message: 'LOGIN.ERRORS.PASSWORD.MIN_LENGTH' }
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
