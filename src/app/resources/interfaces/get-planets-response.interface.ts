import { Planet } from './planet.interface';
import { ListMetadata } from './list-metadata.interface';

export interface GetPlanetResponse extends ListMetadata {
  results: Planet[];
}
