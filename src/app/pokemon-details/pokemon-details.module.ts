import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailsComponent } from './pokemon-details.component';
import { PokemonDetailsRoutingModule } from './pokemon-details-routing.module';
import { LoaderModule } from '../loader/loader.module';



@NgModule({
  declarations: [PokemonDetailsComponent],
  imports: [
    CommonModule,
    PokemonDetailsRoutingModule,
    LoaderModule
  ]
})
export class PokemonDetailsModule { }
