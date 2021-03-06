import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BikesRoutingModule } from './bikes-routing.module';
import { BikesComponent } from './bikes.component';
import { BikeDetailComponent } from './bike-detail/bike-detail.component';
import { BikeListComponent } from './bike-list/bike-list.component';
import { BikeSearchPipe } from './_pipes/bike-search.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BikesComponent, BikeDetailComponent, BikeListComponent, BikeSearchPipe],
  imports: [
    CommonModule,
    BikesRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
  ]
})
export class BikesModule { }
