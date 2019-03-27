import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planets-table',
  templateUrl: './planets-table.component.html',
  styleUrls: ['./planets-table.component.scss']
})
export class PlanetsTableComponent implements OnInit {
  readonly columns = [
    'name',
    'rotationPeriod',
    'orbitalPeriod',
    'diameter',
    'climate'
  ];
  constructor() {}

  ngOnInit() {}
}
