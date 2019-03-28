import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { GetPlanetResponse } from '../resources/interfaces/get-planets-response.interface';
import { ListWithMetadata } from '../resources/interfaces/list-with-metadata.interface';
import { Utils } from '../resources/utils';

const endpoints = {
  getPlanets: `${environment.corsProxy}${environment.apiUrl}planets`
};

@Injectable({
  providedIn: 'root'
})
export class ListDataService {
  constructor(private http: HttpClient) {}

  getPlanets(): Observable<ListWithMetadata> {
    return this.http.get<GetPlanetResponse>(endpoints.getPlanets).pipe(
      tap(elm => console.log('elm: ', elm)),
      map(Utils.transformFromLowDashToCamel.bind(this)),
      map(Utils.transformToListWithMetadata.bind(this))
    );
  }

  getMorePlanets(url: string): Observable<ListWithMetadata> {
    return this.http.get<GetPlanetResponse>(url).pipe(
      map(Utils.transformFromLowDashToCamel.bind(this)),
      map(Utils.transformToListWithMetadata.bind(this))
    );
  }
}
