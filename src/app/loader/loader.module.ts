import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// componentes
import { LoaderComponent } from './loader.component';



@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule
  ],
  exports: [LoaderComponent]
})
export class LoaderModule { }
