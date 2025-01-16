'use server';

const getTag = (params = '') => ['ITUNES_PROXY', params].join('-');

export const itunesProxy = async (params?: string) => {
  const newParams = new URLSearchParams(params);
  const fetchUrl = new URL('search', process.env.ITUNES_API_URL);
  newParams.set('limit', '25');
  if (params) {
    fetchUrl.search = newParams.toString();
  }
  const tag = getTag(newParams.toString());
  try {
    const search = await fetch(fetchUrl, {
      cache: 'force-cache',
      next: {
        revalidate: 60 * 60 * 24,
        tags: [tag],
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
