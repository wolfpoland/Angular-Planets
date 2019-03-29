import { NgModule } from '@angular/core';

import { PlanetDetailsRoutingModule } from './planet-details-routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { DetailsComponent } from './containers/details/details.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    SharedModule,
    PlanetDetailsRoutingModule,
    MatCardModule
  ]
})
export class PlanetDetailsModule { }
