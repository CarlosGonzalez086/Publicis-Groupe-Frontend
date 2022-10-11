//Importes necesario
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Importes de los componentes   

import { HomeComponent } from "./components/home/home.component";
import { ErrorComponent } from "./components/error/error.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { UserEditComponent } from "./components/user-edit/user-edit.component";
import { MiperfilComponent } from "./components/miperfil/miperfil.component";
import { MimusicaComponent } from "./components/mimusica/mimusica.component";
import { GeneromusicalComponent } from "./components/generomusical/generomusical.component";
import { MiscancionesComponent } from "./components/miscanciones/miscanciones.component";


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'inicio', component: HomeComponent },
    { path: 'login', component:LoginComponent},
    { path: 'logout/:sure', component: LoginComponent },
    { path: 'register',component:RegisterComponent },
    { path: 'user-edit',component:UserEditComponent },
    { path: 'miperfil',component:MiperfilComponent },
    { path: 'mimusica',component:MimusicaComponent },
    { path: 'migeneromusical',component:GeneromusicalComponent },
    { path: 'micanciones',component:MiscancionesComponent },
    { path: '**', component:ErrorComponent  }


];

//Exportar configuraciones
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)