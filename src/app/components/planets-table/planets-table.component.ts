import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ChangeDetectionStrategy
} from '@angular/core';
import { Planet } from 'src/app/resources/interfaces/planet.interface';
import { ListMetadata } from 'src/app/resources/interfaces/list-metadata.interface';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-planets-table',
  templateUrl: './planets-table.component.html',
  styleUrls: ['./planets-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

  @Output()
  navigateToDetailsView: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  pageChanged: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  @ViewChild(MatPaginator)
  private paginator: MatPaginator;

  dataSource = new MatTableDataSource<Planet>();
  readonly columns = [
    'name',
    'rotationPeriod',
    'orbitalPeriod',
    'diameter',
    'climate'
  ];
  readonly PAGE_SIZE = 10;

  moveToFirstPage() {
    this.paginator.firstPage();
  }

  onPageChange(event: PageEvent) {
    this.pageChanged.next(event);
  }

  getRow(row: Planet) {
    this.navigateToDetailsView.next(row.id);
  }
}
