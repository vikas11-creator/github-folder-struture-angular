import { BaseClass } from './../../shared/common/baseClass';
import { Component, OnInit, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent extends BaseClass implements OnInit {
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
    'oldPassword': [
      { type: 'required', message: 'Please enter oldPassword' },
      { type: 'maxlength', message: 'oldPassword must be between 2 to 50 characters' },
      { type: 'minlength', message: 'oldPassword must be between 2 to 50 characters' },

    ],
    'newPassword': [
      { type: 'required', message: 'Please enter newPassword' },
      { type: 'minlength', message: 'newPassword must be between 5 to 50 characters' }
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
      oldPassword: ['', Validators.compose([Validators.required,Validators.minLength(2), Validators.maxLength(51)])],
      newPassword: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    });
  }

  login(loginForm: FormGroup) {
    this.formSubmitAttempt = true;
  }
}
