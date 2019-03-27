import { Component } from '@angular/core';
@Component({
  selector: 'app-planets-table',
  templateUrl: './planets-table.component.html',
  styleUrls: ['./planets-table.component.scss']
})
export class PlanetsTableComponent {
  readonly columns = [
    'name',
    'rotationPeriod',
    'orbitalPeriod',
    'diameter',
    'climate'
  ];
}
