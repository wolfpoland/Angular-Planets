import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, selectedPlanet } from 'src/app/store/reducers';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { SelectPlanet } from 'src/app/store/actions/list.actions';
import { ActivatedRoute } from '@angular/router';
import { Planet } from 'src/app/resources/interfaces/planet.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  planet: Planet;
  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.store.dispatch(new SelectPlanet(params.id));
    });

    this.store
      .pipe(
        takeUntil(this.ngUnsubscribe),
        select(selectedPlanet)
      )
      .subscribe(res => {
        if (!!res) {
          this.planet = res;
        }
      });
  }
}
