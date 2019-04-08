import { NgModule } from '@angular/core';

import { PlanetDetailsRoutingModule } from './planet-details-routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { DetailsComponent } from './containers/details/details.component';
import { MatCardModule } from '@angular/material/card';
import { PlanetInformationComponent } from './components/planet-information/planet-information.component';

@NgModule({
  imports: [SharedModule, PlanetDetailsRoutingModule, MatCardModule],
  declarations: [DetailsComponent, PlanetInformationComponent]
})
export class PlanetDetailsModule {}
