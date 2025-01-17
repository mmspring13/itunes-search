import { MediaList } from '@/components/media-list';
import qs from 'qs';
import Link from 'next/link';
import { HomePageSearch } from '@/components/home-page-search';
import { ItunesQuery, itunesQueryProps, QueryValue } from '@/api/types';
import { redirect } from 'next/navigation';

const HomePage = async ({
  searchParams,
}: {
  searchParams?: Promise<Record<string, QueryValue>>;
}) => {
  const search = await searchParams;

  // validate search params
  if (search) {
    if (JSON.stringify(search).length > 380) {
      redirect('/');
    }
    const newQuery: Record<string, QueryValue> = {};
    for (const [key, value] of Object.entries(search)) {
      if (itunesQueryProps.includes(key as keyof ItunesQuery)) {
        newQuery[key] = value;
      }
    }
    if (Object.keys(newQuery).length !== Object.keys(search).length) {
      redirect('/');
    }
  }

  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <h1 className='mb-6 text-center text-2xl'>
        <Link href='/'>Welcome to Itunes Search</Link>
      </h1>
      <HomePageSearch queryString={qs.stringify(search)} />
      <MediaList queryString={qs.stringify(search)} />
    </div>
  );
};

export default HomePage;
