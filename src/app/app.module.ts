import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ViewAccountComponent } from './view-account/view-account.component';
import { VerifyAccountComponent } from './verify-account/verify-account.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { ViewTransactionsComponent } from './view-transactions/view-transactions.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AddPayeeComponent } from './add-payee/add-payee.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { ViewPayeesComponent } from './view-payees/view-payees.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { ListMyAccountComponent } from './list-my-account/list-my-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    CreateAccountComponent,
    ViewAccountComponent,
    VerifyAccountComponent,
    DepositComponent,
    WithdrawComponent,
    ViewTransactionsComponent,
    HomeComponent,
    AddPayeeComponent,
    FundTransferComponent,
    ViewPayeesComponent,
    ListUsersComponent,
    ListEmployeesComponent,
    ListMyAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
