'use client';

import { Alert } from '@nextui-org/react';

export const MediaListAlert = ({ message }: { message: string }) => {
  return (
    <Alert
      classNames={{ mainWrapper: 'overflow-hidden' }}
      color='danger'
      title={message}
    />
  );
};
