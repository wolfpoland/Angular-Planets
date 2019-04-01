import { Component, Input } from '@angular/core';
import { Planet } from 'src/app/resources/interfaces/planet.interface';

@Component({
  selector: 'app-planet-information',
  templateUrl: './planet-information.component.html',
  styleUrls: ['./planet-information.component.scss']
})
export class PlanetInformationComponent {
  @Input()
  planetData: Planet;
}
