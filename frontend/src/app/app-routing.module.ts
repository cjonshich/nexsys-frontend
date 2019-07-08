import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { UnitComponent } from './components/unit/unit.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'unidad/:unit', component: UnitComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
