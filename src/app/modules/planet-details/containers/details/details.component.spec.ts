import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { PlanetInformationComponent } from '../../components/planet-information/planet-information.component';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import reducers from 'src/app/store/reducers';
import { RouterTestingModule } from '@angular/router/testing';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, StoreModule.forRoot(reducers), RouterTestingModule],
      declarations: [ DetailsComponent, PlanetInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
