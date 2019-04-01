import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  AppState,
  selectMetadata,
  selectSliceOfList
} from 'src/app/store/reducers';
import { Store, select } from '@ngrx/store';
import { Planet } from 'src/app/resources/interfaces/planet.interface';
import { Subject, combineLatest } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  CheckLocalStorageData,
  LoadMorePlanets
} from 'src/app/store/actions/list.actions';
import { ListMetadata } from 'src/app/resources/interfaces/list-metadata.interface';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  planets: Planet[];
  filterValue = '';
  listMetadata: ListMetadata;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new CheckLocalStorageData());
    combineLatest(
      this.store.pipe(select(selectMetadata)),
      this.store.pipe(select(selectSliceOfList))
    )
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(([ metadata, list]) => {
        if (!!list && !!metadata) {
          console.log('planets: ', list);
          this.planets = list;
          this.listMetadata = metadata;
        }
      });
  }

  onInputKeyUp(value: string) {
    this.filterValue = value;
  }

  onPageChanged(event: PageEvent) {
    this.store.dispatch(
      new LoadMorePlanets({
        pageIndex: event.pageIndex + 1,
        num: event.pageIndex * event.pageSize
      })
    );
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
