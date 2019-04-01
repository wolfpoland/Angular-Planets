import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './containers/list/list.component';


const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'details/:id',
    loadChildren: './modules/planet-details/planet-details.module#PlanetDetailsModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
