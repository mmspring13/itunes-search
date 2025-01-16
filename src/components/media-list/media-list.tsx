import { itunesProxy } from '@/api/itunes-proxy';
import { MediaListAlert, MediaListTable } from './client';

export const MediaList = async ({ queryString }: { queryString?: string }) => {
  let data = null;
  let error = null;
  if (queryString) {
    data = await itunesProxy(queryString);
    if (data instanceof Error) {
      error = data;
    }
  }

  return (
    <div className='mt-4 w-full'>
      {error && <MediaListAlert message={error.message} />}
      {data && (
        <MediaListTable data={data?.results || []} count={data.resultCount} />
      )}
    </div>
  );
};
