import { itunesProxy } from '@/api/itunes-proxy';
import { MediaListAlert } from './client';
import { Suspense } from 'react';
import { Spinner } from '@nextui-org/react';
import { MediaTableList } from '../media-table-list';
import { ErrorBoundary } from 'react-error-boundary';

export const MediaList = async ({ queryString }: { queryString?: string }) => {
  let fetchData = null;
  if (queryString) {
    fetchData = itunesProxy(queryString);
  } else {
    return null;
  }

  return (
    <div className='mt-4 w-full'>
      <ErrorBoundary FallbackComponent={MediaListAlert}>
        <Suspense
          fallback={
            <div className='flex justify-center py-6'>
              <Spinner />
            </div>
          }
        >
          <MediaTableList url={queryString} fetchData={fetchData} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
