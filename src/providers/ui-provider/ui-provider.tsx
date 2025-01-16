'use client';

import { NextUIProvider } from '@nextui-org/react';
import { FC, PropsWithChildren } from 'react';

export const AppUIProvider: FC<PropsWithChildren> = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};
