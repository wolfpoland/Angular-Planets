import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { GetPlanetResponse } from '../resources/interfaces/get-planets-response.interface';
import { ListWithMetadata } from '../resources/interfaces/list-with-metadata.interface';
import { Utils } from '../resources/utils';

const endpoints = {
  getPlanets: `${environment.corsProxy}${environment.apiUrl}planets`,
  getNextPlanetPage: `${environment.apiUrl}planets`
};

@Injectable({
  providedIn: 'root'
})
export class ListDataService {
  constructor(private http: HttpClient) {}

  getPlanets(): Observable<ListWithMetadata> {
    return this.http.get<GetPlanetResponse>(endpoints.getPlanets).pipe(
      tap(elm => console.log('elm: ', elm)),
      map(Utils.appendId.bind(this)),
      map(Utils.transformToListWithMetadata.bind(this))
    );
  }

  getMorePlanets(url: string): Observable<ListWithMetadata> {
    return this.http.get<GetPlanetResponse>(url).pipe(
      map(Utils.appendId.bind(this)),
      map(Utils.transformToListWithMetadata.bind(this))
    );
  }

  getNextPlanetPage(pageIndex: number): Observable<ListWithMetadata> {
    return this.http
      .get<GetPlanetResponse>(endpoints.getNextPlanetPage, {
        params: new HttpParams().set('page', pageIndex.toString())
      })
      .pipe(
        map(Utils.appendId.bind(this)),
        map(Utils.transformToListWithMetadata.bind(this))
      );
  }
}
