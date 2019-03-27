import { ListMetadata } from './list-metadata.interface';
import { Planet } from './planet.interface';

export interface ListWithMetadata {
  metadata: ListMetadata;
  results: Planet[];
}
