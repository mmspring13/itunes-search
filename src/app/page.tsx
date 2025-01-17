import { MediaList } from '@/components/media-list';
import qs from 'qs';
import { Suspense } from 'react';
import Link from 'next/link';
import { HomePageSearch } from '@/components/home-page-search';

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
      <HomePageSearch />
      <Suspense>
        <MediaList queryString={qs.stringify(await searchParams)} />
      </Suspense>
    </div>
  );
};

export default HomePage;
