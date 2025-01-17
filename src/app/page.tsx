import { MediaList } from '@/components/media-list';
import qs from 'qs';
import Link from 'next/link';
import { HomePageSearch } from '@/components/home-page-search';

const HomePage = async ({
  searchParams,
}: {
  searchParams?: Promise<Record<string, unknown>>;
}) => {
  const search = await searchParams;

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
