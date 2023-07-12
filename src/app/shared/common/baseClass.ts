import { Injectable, Injector, OnInit } from '@angular/core';
import Utils from './utils';
import { Router } from '@angular/router';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Injectable()
export class BaseClass {

  private routerForBaseClass: Router;
  public notAvailable = 'N/A';

  constructor(public injector: Injector) {
    this.routerForBaseClass = injector.get(Router);
  }

  // to validate either formArray, formControl, FormGroup.
  // tslint:disable-next-line:variable-name
  getErrorMessage(formGroup, validation_messages, validation_item): string {
    let message = '';
    const keys = Object.keys(formGroup.controls);
    const index = keys.indexOf(validation_item);
    if (index !== -1) {
      const control = formGroup.get(keys[index]);
      if (control instanceof FormControl) {
        message = this.getControlErrorMessage(control, validation_messages, validation_item);
      }
    } else {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < keys.length; i++) {
        const control = formGroup.get(keys[i]);
        if (control instanceof FormGroup) {
          this.getErrorMessage(control, validation_messages, validation_item);
        } else if (control instanceof FormArray) {
          message = this.validateFormArray(control, validation_messages, validation_item);
          break;
        }
      }
    }
    return message;
  }
  // to validate form array
  // tslint:disable-next-line:variable-name
  private validateFormArray(formControl: FormArray, validation_messages, validation_item) {
    let message = '';
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < formControl.controls.length; i++) {
      message = this.getErrorMessage(formControl.controls[i], validation_messages, validation_item);
      if (message !== '') {
        break;
      }
    }
    return message;
  }

  // returns the error particular message configured in form.
  // tslint:disable-next-line:variable-name
  private getControlErrorMessage(control, validation_messages?: any, validation_item?: any) {
     // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < validation_messages[validation_item].length; i++) {
      if (control.hasError(validation_messages[validation_item][i].type)) {
        return validation_messages[validation_item][i].message;
      }
    }
  }


  findInvalidControls(formObject) {
    const invalid = [];
    const controls = formObject.controls;
    for (const name in controls) {
      if (controls[name].invalid || controls[name].hasError('notValid')) {
        invalid.push(name);
      }
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
      else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
