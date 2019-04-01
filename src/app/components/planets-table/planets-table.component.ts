import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Planet } from 'src/app/resources/interfaces/planet.interface';
import { ListMetadata } from 'src/app/resources/interfaces/list-metadata.interface';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-planets-table',
  templateUrl: './planets-table.component.html',
  styleUrls: ['./planets-table.component.scss']
})
export class PlanetsTableComponent {
  @Input()
  set planetsData(data) {
    if (!!data) {
      this.dataSource.data = data;
    }
  }

  @Input()
  metadata: ListMetadata | null;

  @Input()
  set filterTable(filterValue: string) {
    if (!!filterValue) {
      // this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }

  @Output()
  navigateToDetailsView: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  pageChanged: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  dataSource = new MatTableDataSource<Planet>();
  readonly columns = [
    'name',
    'rotationPeriod',
    'orbitalPeriod',
    'diameter',
    'climate'
  ];
  readonly PAGE_SIZE = 10;

  onPageChange(event: PageEvent) {
    this.pageChanged.next(event);
  }

  getRow(row: Planet) {
    console.log('row: ', row);
    this.navigateToDetailsView.next(row.id);
  }
}
