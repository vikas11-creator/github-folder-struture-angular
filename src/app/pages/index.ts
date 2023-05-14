import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RootFolderComponent } from './root-folder/root-folder.component';

export const rootPages = [
  LoginComponent,
  ForgotPasswordComponent,
  RootFolderComponent
];

export * from './login/login.component';
export * from './forgot-password/forgot-password.component';
export * from './root-folder/root-folder.component';