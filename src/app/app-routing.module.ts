import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPayeeComponent } from './add-payee/add-payee.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DepositComponent } from './deposit/deposit.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { ListMyAccountComponent } from './list-my-account/list-my-account.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifyAccountComponent } from './verify-account/verify-account.component';
import { ViewAccountComponent } from './view-account/view-account.component';
import { ViewPayeesComponent } from './view-payees/view-payees.component';
import { ViewTransactionsComponent } from './view-transactions/view-transactions.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

const routes: Routes = [

  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'create-account', component:CreateAccountComponent},
  // {path:'view-account/534', component:ViewAccountComponent},
  // {path:'view-account/812', component:ViewAccountComponent},
  {path:'view-account/:accountNo', component:ViewAccountComponent}, 
  {path:'my-accounts', component:ListMyAccountComponent},
  {path:'verify-account', component:VerifyAccountComponent},
  {path:'deposit', component:DepositComponent},
  {path:'withdraw', component:WithdrawComponent},
  {path:'fund-transfer', component:FundTransferComponent},
  {path:'view-transactions', component:ViewTransactionsComponent},
  {path:'add-payee', component:AddPayeeComponent},
  {path:'view-payees', component:ViewPayeesComponent},
  {path:'users', component:ListUsersComponent},
  {path:'employees', component:ListEmployeesComponent},
  {path:'', redirectTo:'login', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
