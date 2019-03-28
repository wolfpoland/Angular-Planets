import { GetPlanetResponse } from './interfaces/get-planets-response.interface';
import uuid from 'uuid';

export class Utils {
  static transformFromLowDashToCamel(elm: any) {
    return {
      ...elm,
      results: elm.results.map(result => ({
        ...result,
        id: uuid.v4(),
        rotationPeriod: result.rotation_period,
        rotation_period: undefined,
        orbitalPeriod: result.orbital_period,
        orbital_period: undefined
      }))
    };
  }

  static transformToListWithMetadata(elm: GetPlanetResponse) {
    return {
      metadata: {
        count: elm.count,
        next: elm.next,
        previous: elm.previous
      },
      results: [...elm.results]
    };
  }
}
