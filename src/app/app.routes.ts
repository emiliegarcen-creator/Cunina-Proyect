import { Routes } from '@angular/router';
import { HomeComponent } from './Components/Home/home.component';
import { LoginComponent } from './Components/Login/login.component';
import { RegisterComponent } from './Components/Register/register.component';
import { GuarderiasComponent } from './Components/Guarderias/guarderias.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'guarderias', component: GuarderiasComponent },
  { path: '**', redirectTo: '' },
];
