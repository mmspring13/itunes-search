import qs from 'qs';
import { ItunesQuery, itunesQueryProps, QueryValue } from './types';

export const validateQuery = (query?: Record<string, QueryValue>) => {
  if (!query || qs.stringify(query).length > 380) {
    return false;
  }
  const newQuery: Record<string, QueryValue> = {};
  for (const [key, value] of Object.entries(query)) {
    if (itunesQueryProps.includes(key as keyof ItunesQuery)) {
      newQuery[key] = value;
    }
  }
  if (Object.keys(newQuery).length !== Object.keys(query).length) {
    return false;
  }
};
