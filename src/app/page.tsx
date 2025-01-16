import { AppSearch } from '@/components/search';
import { MediaList } from '@/components/media-list';
import qs from 'qs';
import { Suspense } from 'react';
import { Spinner } from '@nextui-org/react';
import Link from 'next/link';

const HomePage = async ({
  searchParams,
}: {
  searchParams?: Promise<Record<string, unknown>>;
}) => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <h1 className='mb-6 text-center text-xl'>
        <Link href='/'>Welcome to Itunes Search</Link>
      </h1>
      <AppSearch />
      <Suspense fallback={<Spinner className='mt-16' />}>
        <MediaList queryString={qs.stringify(await searchParams)} />
      </Suspense>
    </div>
  );
};

export default HomePage;
