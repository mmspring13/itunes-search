import qs from 'qs';
import { ItunesQuery, itunesQueryProps, QueryValue } from './types';

export const validateQuery = (query?: Record<string, QueryValue>) => {
  if (
    !query ||
    !Object.keys(query).length ||
    qs.stringify(query).length > 380
  ) {
    return false;
  }
  const newQuery: Record<string, QueryValue> = {};
  for (const key in query) {
    if (!itunesQueryProps.includes(key as keyof ItunesQuery)) {
      return false
    }
  }
  return true;
};
