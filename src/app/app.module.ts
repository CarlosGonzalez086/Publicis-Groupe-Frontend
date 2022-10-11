import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { appRoutingProviders, routing } from './app.routing';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { UserService } from './Services/user.services';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { MiperfilComponent } from './components/miperfil/miperfil.component';
import { MimusicaComponent } from './components/mimusica/mimusica.component';
import { GeneromusicalComponent } from './components/generomusical/generomusical.component';
import { MiscancionesComponent } from './components/miscanciones/miscanciones.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ErrorComponent,
    UserEditComponent,
    MiperfilComponent,
    MimusicaComponent,
    GeneromusicalComponent,
    MiscancionesComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule, 
  ],
  providers: [appRoutingProviders,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
