import { MediaType } from '@/api/types';

export type FilterItemName =
  | 'term'
  | 'country'
  | 'media'
  | 'entity'
  | 'attribute';

export type FilterItem<T> = [T | undefined, (value: T) => void];

export type AppSearchContext = {
  term: FilterItem<string>;
  country: FilterItem<string[]>;
  media: FilterItem<(MediaType | string)[]>;
  entity: FilterItem<string[]>;
  attribute: FilterItem<string[]>;
};
