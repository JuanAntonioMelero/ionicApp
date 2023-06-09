import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanLoad } from '@angular/router';

import { PagesPage } from './pages.page';
import { DashboardPage } from './dashboard/dashboard.page';
import { PerfilPage } from './perfil/perfil.page';
import { MensajesPage } from './mensajes/mensajes.page';
import { UsuarioGuard } from '../guards/usuario.guard';
import { PushPage } from './push/push.page';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate:[UsuarioGuard],
    component: PagesPage,

    children: [
      { path: '', component: DashboardPage },
      { path: 'perfil', component: PerfilPage },
      { path: 'mensajes', component: MensajesPage },
      { path: 'push', component: PushPage }

    ]
  },

  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'mensajes',
    loadChildren: () => import('./mensajes/mensajes.module').then( m => m.MensajesPageModule)
  },
  {
    path: 'push',
    loadChildren: () => import('./push/push.module').then( m => m.PushPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
