import { TestBed } from '@angular/core/testing';

import { ListService } from './list.service';
import { Page } from '../resources/interfaces/page.interface';
import { PagesWithMetadata } from '../resources/interfaces/page-with-metadata.interface';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

const helperPageArray: Page[] = [
  {
    index: 0,
    list: [
      {
        id: 'test1',
        climate: 'test',
        diameter: 'test',
        gravity: 'test',
        name: 'test',
        orbitalPeriod: 'test',
        population: 'test',
        residents: ['test'],
        rotationPeriod: 'test',
        surfaceWater: 'test',
        terrain: 'test'
      },
      {
        id: 'test2',
        climate: 'test',
        diameter: 'test',
        gravity: 'test',
        name: 'diffName',
        orbitalPeriod: 'test',
        population: 'test',
        residents: ['test'],
        rotationPeriod: 'test',
        surfaceWater: 'test',
        terrain: 'test'
      }
    ]
  },
  {
    index: 1,
    list: [
      {
        id: 'test3',
        climate: 'test',
        diameter: 'test',
        gravity: 'test',
        name: 'test',
        orbitalPeriod: 'test',
        population: 'test',
        residents: ['test'],
        rotationPeriod: 'test',
        surfaceWater: 'test',
        terrain: 'test'
      }
    ]
  }
];

const expectedObject: PagesWithMetadata = {
  count: 2,
  pages: [
    {
      index: 1,
      list: [
        {
          id: 'test1',
          climate: 'test',
          diameter: 'test',
          gravity: 'test',
          name: 'test',
          orbitalPeriod: 'test',
          population: 'test',
          residents: ['test'],
          rotationPeriod: 'test',
          surfaceWater: 'test',
          terrain: 'test'
        },
        {
          id: 'test3',
          climate: 'test',
          diameter: 'test',
          gravity: 'test',
          name: 'test',
          orbitalPeriod: 'test',
          population: 'test',
          residents: ['test'],
          rotationPeriod: 'test',
          surfaceWater: 'test',
          terrain: 'test'
        }
      ]
    }
  ]
};

describe('ListService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [BrowserModule, HttpClientModule]
    })
  );

  it('should be created', () => {
    const service: ListService = TestBed.get(ListService);
    expect(service).toBeTruthy();
  });

  it('should filter planets and return that as Page object', () => {
    const service: ListService = TestBed.get(ListService);
    expect(service.filterList(helperPageArray, 'te')).toEqual(expectedObject);
  });

  it('should not mutate orginal object', () => {
    const service: ListService = TestBed.get(ListService);
    const shallowCopy = [...helperPageArray];
    service.filterList(helperPageArray, 'te');

    expect(helperPageArray).toEqual(shallowCopy);
  });
});
