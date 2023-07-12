import { BaseClass } from './../../shared/common/baseClass';
import { Component, OnInit, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { PATH } from 'src/app/app.constant';
import { AuthService } from 'src/app/shared/services/auth.service';
import { VALIDATION_PATTERNS } from 'src/app/shared/common/validation-patterns';
import { sharedService } from 'src/app/shared/services/shared.service';

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
  
  constructor(private fb: FormBuilder,
    private router: Router,
    private spinnerService: NgxSpinnerService,
    private authService: AuthService,
    public override injector: Injector,
    private sharedService: sharedService) {
    super(injector);
    this.strMsg = '';
  }

  ngOnInit(): void {
   
  }
}
