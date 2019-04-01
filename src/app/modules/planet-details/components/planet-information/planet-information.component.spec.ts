import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetInformationComponent } from './planet-information.component';

describe('PlanetInformationComponent', () => {
  let component: PlanetInformationComponent;
  let fixture: ComponentFixture<PlanetInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
