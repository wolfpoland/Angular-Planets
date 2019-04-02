import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import {
  AppState,
  selectMetadata,
  selectSliceOfList,
  selectedFilteredPlanets
} from 'src/app/store/reducers';
import { Store, select } from '@ngrx/store';
import { Planet } from 'src/app/resources/interfaces/planet.interface';
import { Subject, combineLatest } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  CheckLocalStorageData,
  LoadMorePlanets,
  FilterPlanets,
  LoadMoreFilteredPlanets
} from 'src/app/store/actions/list.actions';
import { ListMetadata } from 'src/app/resources/interfaces/list-metadata.interface';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { PlanetsTableComponent } from 'src/app/components/planets-table/planets-table.component';

enum ListState {
  real = 0,
  filtered = 1
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  planets: Planet[];
  listMetadata: ListMetadata;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  private listState: ListState;

  @ViewChild(PlanetsTableComponent)
  private planetsTable: PlanetsTableComponent;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(new CheckLocalStorageData());
    combineLatest(
      this.store.pipe(select(selectMetadata)),
      this.store.pipe(select(selectSliceOfList)),
      this.store.pipe(select(selectedFilteredPlanets))
    )
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(([metadata, list, listWithMetadata]) => {
        if (!!metadata) {
          if (!!listWithMetadata && !!listWithMetadata.results.length) {
            this.planets = listWithMetadata.results;
            this.listMetadata = listWithMetadata.metadata;
            this.listState = ListState.filtered;
            this.planetsTable.moveToFirstPage();
          } else if (!!list) {
            this.planets = list;
            this.listMetadata = metadata;
            this.listState = ListState.real;
          }
        }
      });
  }

  onInputKeyUp(value: string) {
    this.store.dispatch(new FilterPlanets(value));
  }

  onPageChanged(event: PageEvent) {
    const index = event.pageIndex + 1;
    if (this.listState === ListState.real) {
      this.store.dispatch(new LoadMorePlanets(index));
    } else {
      this.store.dispatch(new LoadMoreFilteredPlanets(index));
    }
  }

  onNavigateToDetailsView(id: string) {
    this.router.navigate(['/details', id]);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
