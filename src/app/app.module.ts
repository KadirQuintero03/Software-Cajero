import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardPageComponent } from './pages/private/dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './pages/public/login-page/login-page.component';
import { MoneyOptionsPageComponent } from './pages/private/money-options-page/money-options-page.component';
import { ConfirmPageComponent } from './pages/private/confirm-page/confirm-page.component';
import { OtherOptionPageComponent } from './pages/private/other-option-page/other-option-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardPageComponent,
    MoneyOptionsPageComponent,
    ConfirmPageComponent,
    OtherOptionPageComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
