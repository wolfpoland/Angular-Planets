import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Planet } from '../resources/interfaces/planet.interface';
import { map, tap } from 'rxjs/operators';
import { GetPlanetResponse } from '../resources/interfaces/get-planets-response.interface';

const endpoints = {
  getPlanets: `${environment.corsProxy}${environment.apiUrl}planets`
};

@Injectable({
  providedIn: 'root'
})
export class ListDataService {
  constructor(private http: HttpClient) {}

  getPlanets(): Observable<GetPlanetResponse> {
   return this.http.get<GetPlanetResponse>(endpoints.getPlanets);
  }
}
