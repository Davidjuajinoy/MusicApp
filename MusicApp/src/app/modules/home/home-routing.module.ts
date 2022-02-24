import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'tracks',
    loadChildren: ()=> import('../tracks/tracks.module').then(m=>m.TracksModule)
  },
  {
    path:'favorites',
    loadChildren: ()=> import('../favorites/favorites.module').then(m=>m.FavoritesModule)
  },
  {
    path:'search',
    loadChildren: ()=> import('../search/search.module').then(m=>m.SearchModule)
  },
  {
    path:'**',
    redirectTo: 'tracks'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
