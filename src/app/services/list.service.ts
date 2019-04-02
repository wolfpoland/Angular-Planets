import { Injectable } from '@angular/core';
import { Planet } from '../resources/interfaces/planet.interface';
import { Page } from '../resources/interfaces/page.interface';
import { Utils } from '../resources/utils';
import { PagesWithMetadata } from '../resources/interfaces/page-with-metadata.interface';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  filterList(pages: Page[], filterValue: string): PagesWithMetadata {
    if (filterValue.length === 0) {
      return null;
    }
    const planets: Planet[][] = [];
    const localPages: Page[] = [];
    const buffer = [];
    let count = 0;
    let counter = 0;
    const flatPlages = Utils.flatPages(pages).filter(planet =>
      planet.name
        .trim()
        .toLocaleLowerCase()
        .includes(filterValue.trim().toLocaleLowerCase())
    );
    count = flatPlages.length;
    flatPlages.forEach(planet => {
      if (counter < 10) {
        buffer.push(planet);
        counter++;
      } else {
        planets.push([...buffer]);
        counter = 0;
        buffer.length = 0;
      }
    });

    if (!!buffer.length) {
      planets.push([...buffer]);
    }

    planets.forEach((planetRow, i) => {
      localPages.push({ list: planetRow, index: i + 1 });
    });

    return { pages: localPages, count };
  }
}
