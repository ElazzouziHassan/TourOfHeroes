import { Routes } from '@angular/router';
import { CrisisCenterComponent } from './pages/crisis-center/crisis-center.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  {path: 'crisis', title:'Tour Of Heroes | Crisis', component: CrisisCenterComponent},
  {path: 'heroes', title:'Tour Of Heroes | Heroes', component: HeroesComponent},
  {path: 'admin', title:'Tour Of Heroes | Admin', component: AdminComponent},
  {path: 'login', title:'Tour Of Heroes | Login', component: LoginComponent},
  {path: 'contact', title:'Tour Of Heroes | Contact', component: ContactComponent},
  {path: '', redirectTo: 'heroes', pathMatch: 'full'},
  {path: '**', title:'Error ! | Page Not Found', component: PageNotFoundComponent},
];
