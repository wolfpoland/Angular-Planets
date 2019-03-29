import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState, selectList } from 'src/app/store/reducers';
import { Store, select } from '@ngrx/store';
import { Planet } from 'src/app/resources/interfaces/planet.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  CheckLocalStorageData,
  LoadMorePlanets
} from 'src/app/store/actions/list.actions';
import { ListMetadata } from 'src/app/resources/interfaces/list-metadata.interface';
import { Router } from '@angular/router';

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

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(new CheckLocalStorageData());
    this.store
      .pipe(
        takeUntil(this.ngUnsubscribe),
        select(selectList)
      )
      .subscribe(res => {
        if (!!res.list) {
          this.planets = res.list;
          this.listMetadata = res.metadata;
        }
      });
  }

  onInputKeyUp(value: string) {
    this.filterValue = value;
  }

  onPageChanged(num: number) {
    if (!!this.listMetadata && !!this.listMetadata.next) {
      this.store.dispatch(new LoadMorePlanets(this.listMetadata.next));
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
