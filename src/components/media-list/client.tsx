'use client';

import { Alert } from '@nextui-org/react';

export const MediaListAlert = () => {
  return (
    <Alert
      classNames={{ mainWrapper: 'overflow-auto' }}
      color='danger'
      title='Fetch failed. Please try again later or change your request'
    />
  );
};
