import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/pokemon' },
  {
    path: 'pokemon/:id',
    loadChildren: () =>
      import('../app/pokemon-details/pokemon-details.module').then(
        (m) => m.PokemonDetailsModule
      ),
  },
  { path: 'pokemon', component: LandingComponent },
  { path: '**', redirectTo:'/pokemon'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
