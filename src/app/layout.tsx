import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { AppUIProvider } from '@/providers/ui-provider';

const inter = Outfit({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pet Itunes Search',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='bg-slate-900'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='theme-color' content='#030712' />
      </head>
      <body
        className={`${inter.className} h-full min-h-dvh bg-background text-foreground antialiased dark`}
      >
        <AppUIProvider>
          <div className='h-full min-h-dvh pb-12'>
            <main className='mx-auto h-full max-w-6xl px-6 pt-8'>
              {children}
            </main>
          </div>
        </AppUIProvider>
      </body>
    </html>
  );
}
