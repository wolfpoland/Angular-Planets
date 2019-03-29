import { GetPlanetResponse } from './interfaces/get-planets-response.interface';
import uuid from 'uuid';

export class Utils {
  static appendId(elm: any) {
    return {
      ...elm,
      results: elm.results.map(result => ({
        ...result,
        id: uuid.v4()
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
