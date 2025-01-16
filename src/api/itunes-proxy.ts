export const itunesProxy = async (params?: string) => {
  'use server';
  const newParams = new URLSearchParams(params);
  const fetchUrl = new URL('search', process.env.ITUNES_API_URL);
  newParams.set('limit', '25');
  if (params) {
    fetchUrl.search = newParams.toString();
  }
  console.log("Start CALL UNSTABLE_CACHE FUNCTION:::", fetchUrl);
  try {
    const search = await fetch(fetchUrl, {
      cache: 'force-cache', 
      next: {
        revalidate: 60 * 60 * 24,
        tags: [params || 'default']
      }
    });
    const data = await search.json();
    return data;
  } catch (error) {
    console.log("End CALL UNSTABLE_CACHE FUNCTION:::", error);
    let message = `Fetching data failed. Please try again later. URL: ${fetchUrl}`;
    if (error instanceof Error) {
      message += ` More details: ${error.message}`;
    }
    return new Error(message);
  };
}
