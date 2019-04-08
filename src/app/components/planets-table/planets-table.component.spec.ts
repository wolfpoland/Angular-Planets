import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsTableComponent } from './planets-table.component';
import { MatTableModule } from '@angular/material/table';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatPaginatorModule } from '@angular/material/paginator';

describe('PlanetsTableComponent', () => {
  let component: PlanetsTableComponent;
  let fixture: ComponentFixture<PlanetsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule, NgxSkeletonLoaderModule, MatPaginatorModule],
      declarations: [ PlanetsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
