'use client';

import { useRouter } from 'next/navigation';
import { AppSearch } from '../search';
import { useEffect, useState, useTransition } from 'react';
import useDebounce from '@/hooks/use-debounce';

export const HomePageSearch = ({ queryString }: { queryString?: string }) => {
  const router = useRouter();
  const [isPendingRoute, startChangeRoute] = useTransition();
  const [searchValue, setSearchValue] = useState(queryString);
  const debouncedSearch = useDebounce(searchValue, 720);

  useEffect(() => {
    setSearchValue(queryString);
  }, [queryString]);

  useEffect(() => {
    startChangeRoute(() => {
      if (debouncedSearch) {
        router.push(`?${debouncedSearch}`);
      } else {
        router.push('/');
      }
    });
  }, [debouncedSearch, router]);

  return (
    <div
      className={
        isPendingRoute ? 'pointer-events-none w-full animate-pulse' : 'w-full'
      }
    >
      <AppSearch value={searchValue} onChange={setSearchValue} />
    </div>
  );
};
