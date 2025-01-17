import { itunesProxy } from '@/api/itunes-proxy';
import { MediaListAlert } from './client';
import { Suspense } from 'react';
import { Spinner } from '@nextui-org/react';
import { MediaTableList } from '../media-table-list';
import { ApiSearchResponse } from '@/api/types';

export const MediaList = async ({ queryString }: { queryString?: string }) => {
  let fetchData = null;
  let error = null;
  if (queryString) {
    fetchData = itunesProxy(queryString);
    if (fetchData instanceof Error) {
      error = fetchData;
      fetchData = null;
    }
  }

  return (
    <div className='mt-4 w-full'>
      {error && <MediaListAlert message={error.message} />}
      {!!fetchData && (
        <Suspense
          fallback={
            <div className='flex justify-center py-6'>
              <Spinner />
            </div>
          }
        >
          <MediaTableList
            url={queryString}
            fetchData={fetchData as Promise<ApiSearchResponse>}
          />
        </Suspense>
      )}
    </div>
  );
};
