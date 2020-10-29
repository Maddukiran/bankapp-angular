import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DepositComponent } from './deposit/deposit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifyAccountComponent } from './verify-account/verify-account.component';
import { ViewTransactionsComponent } from './view-transactions/view-transactions.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

const routes: Routes = [

  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'create-account', component:CreateAccountComponent},
  {path:'verify-account', component:VerifyAccountComponent},
  {path:'deposit', component:DepositComponent},
  {path:'withdraw', component:WithdrawComponent},
  {path:'view-transactions', component:ViewTransactionsComponent},
  {path:'', redirectTo:'login', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
