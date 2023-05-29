import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsuarioGuard } from './guards/usuario.guard';
import { PagesPageRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesPageModule),

  },
  {
    path: '',
    redirectTo: '/dashboard',

    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    PagesPageRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
