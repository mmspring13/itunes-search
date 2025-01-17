import qs, { ParsedQs } from 'qs';
import { useMemo } from 'react';

const forceQueryParamToArray = (value?: ParsedQs[string]): string[] => {
  if (Array.isArray(value)) {
    return value as string[];
  } else if (typeof value === 'string') {
    return [value];
  }
  return [];
};

export const useItunesQuery = (baseQuery: string) => {
  const query = useMemo(() => qs.parse(baseQuery), [baseQuery]);
  const term = useMemo(() => query.term, [query]);
  const country = useMemo(() => forceQueryParamToArray(query.country), [query]);
  const media = useMemo(() => forceQueryParamToArray(query.media), [query]);
  const entity = useMemo(() => forceQueryParamToArray(query.entity), [query]);
  const attribute = useMemo(
    () => forceQueryParamToArray(query.attribute),
    [query]
  );

  return {
    term,
    country,
    media,
    entity,
    attribute,
    query,
  };
};
