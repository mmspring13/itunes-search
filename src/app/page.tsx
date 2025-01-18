import { MediaList } from '@/components/media-list';
import qs from 'qs';
import Link from 'next/link';
import { HomePageSearch } from '@/components/home-page-search';
import { QueryValue } from '@/api/types';
import { validateQuery } from '@/api/utils';
import { redirect } from 'next/navigation';

const HomePage = async ({
  searchParams,
}: {
  searchParams?: Promise<Record<string, QueryValue>>;
}) => {
  const search = await searchParams;

  // validate search params
  if (search && Object.keys(search).length && !validateQuery(search)) {
    redirect('/');
  }

  const query = qs.stringify(search, { arrayFormat: 'repeat' });

  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <h1 className='mb-6 text-center text-2xl'>
        <Link href='/'>Welcome to Itunes Search</Link>
      </h1>
      <HomePageSearch queryString={query} />
      <MediaList queryString={query} />
    </div>
  );
};

export default HomePage;
