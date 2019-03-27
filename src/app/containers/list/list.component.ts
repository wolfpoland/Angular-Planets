import { Component, OnInit } from '@angular/core';
import { AppState, selectList } from 'src/app/store/reducers';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.pipe(select(selectList)).subscribe(res => {
      console.log('res: ', res);
    });
  }
}
