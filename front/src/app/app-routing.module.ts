import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

<<<<<<< HEAD
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
=======
import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/login/login.component';

export const AppRoutes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },{  path:'home',loadChildren: () => import('./home/home.module').then( m => m.HomeModule )},
  { path: '**', redirectTo: 'home' }
];
@NgModule({
  imports: [
    AuthModule,
    RouterModule.forRoot(AppRoutes)],
>>>>>>> 8432047 (Creando login)
  exports: [RouterModule]
})
export class AppRoutingModule { }
