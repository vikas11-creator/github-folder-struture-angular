import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent, LoginComponent, RootFolderComponent } from './pages';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: '',
    component: RootFolderComponent,
    children: [
      {
        path:'product',
        loadChildren: ()=> import('./product/product.module').then((m)=>m.ProductModule)
      },
      {
        path:'purchase',
        loadChildren: ()=> import('./purchase/purchase.module').then((m)=> m.PurchaseModule)
      }
    ],
  },
  {
    path: '**', redirectTo: 'login'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
