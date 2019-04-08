import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { Planet } from 'src/app/resources/interfaces/planet.interface';

@Component({
  selector: 'app-planet-information',
  templateUrl: './planet-information.component.html',
  styleUrls: ['./planet-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetInformationComponent {
  planetDataLocal: Planet;

  constructor(private changeDetector: ChangeDetectorRef) {}

  @Input()
  set planetData(planet: Planet) {
    this.planetDataLocal = planet;
    this.changeDetector.markForCheck();
  }

  get planetData() {
    return this.planetDataLocal;
  }
}
