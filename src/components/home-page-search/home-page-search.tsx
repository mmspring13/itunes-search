'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { AppSearch } from '../search';
import { useCallback, useTransition } from 'react';

export const HomePageSearch = () => {
  const params = useSearchParams();
  const router = useRouter();
  const [isPendingRoute, startChangeRoute] = useTransition();

  const onChange = useCallback(
    (query?: string) => {
      startChangeRoute(() => {
        if (query) {
          router.push(`?${query}`);
        } else {
          router.push('/');
        }
      });
    },
    [router]
  );

  return (
    <div
      className={
        isPendingRoute ? 'pointer-events-none w-full animate-pulse' : 'w-full'
      }
    >
      <AppSearch value={params.toString()} onChange={onChange} />
    </div>
  );
};
