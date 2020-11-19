import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { ResultListItemComponent } from './results-list/result-list-item/result-list-item.component';
import { LoaderModule } from '../loader/loader.module';

@NgModule({
  declarations: [LandingComponent, ResultsListComponent, ResultListItemComponent],
  imports: [CommonModule, LoaderModule],
  exports:[LandingComponent, ResultsListComponent]

})
export class LandingModule {}
