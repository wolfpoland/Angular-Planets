import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  OnInit
} from '@angular/core';
import { Planet } from 'src/app/resources/interfaces/planet.interface';
import { ListMetadata } from 'src/app/resources/interfaces/list-metadata.interface';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-planets-table',
  templateUrl: './planets-table.component.html',
  styleUrls: ['./planets-table.component.scss']
})
export class PlanetsTableComponent implements OnInit {
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
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }

  @Output()
  pageChanged: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<Planet>();
  readonly columns = [
    'name',
    'rotationPeriod',
    'orbitalPeriod',
    'diameter',
    'climate'
  ];
  readonly PAGE_SIZE = 10;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  onPageChange(event: PageEvent) {
    console.log('event: ', event);
    this.pageChanged.next(event.pageIndex * event.pageSize);
  }

  getRow(row: any) {
    console.log('row: ', row);
  }

}
