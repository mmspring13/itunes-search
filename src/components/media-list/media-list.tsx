import { itunesProxy } from '@/api/itunes-proxy';
import { MediaListAlert, MediaListTable } from './client';
import { Suspense } from 'react';
import { Spinner } from '@nextui-org/react';

export const MediaList = async ({ queryString }: { queryString?: string }) => {
  let data = null;
  let error = null;
  if (queryString) {
    data = itunesProxy(queryString);
    if (data instanceof Error) {
      error = data;
    }
  }

  return (
    <div className='mt-4 w-full'>
      {error && <MediaListAlert message={error.message} />}
      {data && (
        <Suspense
          fallback={
            <div className='mt-12 flex justify-center'>
              <Spinner />
            </div>
          }
        >
          <MediaListTable fetchData={data} />
        </Suspense>
      )}
    </div>
  );
};
