'use server';

import qs from 'qs';
import { validateQuery } from './utils';
import { QueryValue } from './types';

const getTag = (params = '') => ['ITUNES_PROXY', params].join('-');

export const itunesProxy = async (params?: string) => {
  if (!params) {
    return null;
  }
  const newParams = qs.parse(params);
  if (!validateQuery(newParams as Record<string, QueryValue>)) {
    return null;
  }

  const fetchUrl = new URL('search', process.env.ITUNES_API_URL);
  newParams.limit = '25';
  if (params) {
    fetchUrl.search = qs.stringify(newParams);
  }
  try {
    const search = await fetch(fetchUrl, {
      cache: 'force-cache',
      next: {
        revalidate: 60 * 60 * 24,
        tags: [getTag(qs.stringify(newParams))],
      },
    });
    const data = await search.json();
    return data;
  } catch (error) {
    let message = `Fetching data failed. Please try again later. URL: ${fetchUrl}`;
    if (error instanceof Error) {
      message += ` More details: ${error.message}`;
    }
    return new Error(message);
  }
};
