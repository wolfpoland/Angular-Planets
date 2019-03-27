import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsTableComponent } from './planets-table.component';

describe('PlanetsTableComponent', () => {
  let component: PlanetsTableComponent;
  let fixture: ComponentFixture<PlanetsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
