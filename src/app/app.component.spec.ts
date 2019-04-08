import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './containers/list/list.component';
import { PlanetsTableComponent } from './components/planets-table/planets-table.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatInputModule,
        NgxSkeletonLoaderModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        ListComponent,
        PlanetsTableComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
