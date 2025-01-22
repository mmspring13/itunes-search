'use server';

import qs from 'qs';
import { validateQuery } from './utils';
import { ItunesResponse, QueryValue } from './types';

const getTag = (params = '') => ['ITUNES_PROXY', params].join('-');

export const itunesProxy = async (
  params?: string,
  count = 0
): Promise<ItunesResponse> => {
  let newCount = count;
  if (!params) {
    throw new Error('Params must be provided');
  }
  const newParams = qs.parse(params);
  if (
    !newParams.term ||
    !validateQuery(newParams as Record<string, QueryValue>)
  ) {
    throw new Error(`Invalid params ${params}`);
  }

  const fetchUrl = new URL('search', process.env.ITUNES_API_URL);
  newParams.limit = '25';
  if (params) {
    fetchUrl.search = qs.stringify(newParams);
  }
  newCount += 1;
  try {
    const search = await fetch(fetchUrl, {
      cache: 'force-cache',
      next: {
        revalidate: 60 * 60 * 24,
        tags: [getTag(JSON.stringify(newParams))],
      },
    });
    const data = await search.json();
    return data;
  } catch (error) {
    if (newCount <= 3) {
      return itunesProxy(params, newCount);
    }
    let message = `Fetching data failed. Please try again later. URL: ${fetchUrl}`;
    if (error instanceof Error) {
      message += ` More details: ${error.message}`;
    }
    throw new Error(message);
  }
};
