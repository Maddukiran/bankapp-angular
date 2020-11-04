import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AddPayeeComponent } from './add-payee/add-payee.component';
import { AuthGuard } from './auth.guard';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DepositComponent } from './deposit/deposit.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { ListMyAccountComponent } from './list-my-account/list-my-account.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RoleGuard } from './role.guard';
import { TransactionSummaryComponent } from './transaction-summary/transaction-summary.component';
import { VerifyAccountComponent } from './verify-account/verify-account.component';
import { ViewAccountComponent } from './view-account/view-account.component';
import { ViewPayeesComponent } from './view-payees/view-payees.component';
import { ViewTransactionsComponent } from './view-transactions/view-transactions.component';
import { WithdrawComponent } from './withdraw/withdraw.component';


  // {path:'view-account/:accountNo/withdraw', component:WithdrawComponent},
  // {path:'view-account/:accountNo/deposit', component:DepositComponent},
  // {path:'view-account/:accountNo/view-transactions', component:ViewTransactionsComponent},
  //{path:'view-account/:accountNo', component:ViewAccountComponent}, 
const routes: Routes = [

  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'create-account', component:CreateAccountComponent, canActivate:[AuthGuard]},
  {path:'view-account/:accountNo', component:AccountComponent, canActivate:[AuthGuard],
    children: [
      {path: 'deposit', component: DepositComponent},
      {path: 'withdraw', component: WithdrawComponent},
      {path:'view-transactions', component: ViewTransactionsComponent},      
      {path:'', component: ViewAccountComponent}
    ]
  },
  
  {path:'my-accounts', component:ListMyAccountComponent, canActivate:[AuthGuard]},
  {path:'verify-account', component:VerifyAccountComponent, canActivate:[AuthGuard, RoleGuard]},
  
  
  {path:'fund-transfer', component:FundTransferComponent, canActivate:[AuthGuard]},
  
  {path:'add-payee', component:AddPayeeComponent, canActivate:[AuthGuard]},
  {path:'view-payees', component:ViewPayeesComponent, canActivate:[AuthGuard]},
  {path:'users', component:ListUsersComponent, canActivate:[AuthGuard]},
  {path:'employees', component:ListEmployeesComponent, canActivate:[AuthGuard]},
  {path:'', redirectTo:'login', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
