import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { headers } from 'next/headers';
import type { PropsWithChildren } from 'react';
import { cookieToInitialState } from 'wagmi';
import { Toaster } from 'sonner';

import { Providers } from './providers';
import { Header } from '@/components/layout/header/Header';
import { getConfig } from '@/config/wagmi';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-poppins',
  style: ['normal'],
});

export const metadata: Metadata = {
  title: 'Rage Dashboard',
  description: 'A Rage dashboard with Ethereum wallet integration.',
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const initialState = cookieToInitialState(getConfig(), (await headers()).get('cookie'));

  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased flex flex-col min-h-screen`}>
        <Providers initialState={initialState}>
          <Header />

          <main className="max-w-[1392px] w-full min-h-screen mx-auto pt-[73px] px-2">
            {children}
          </main>

          <Toaster duration={3_000} position="top-right" theme="dark" />
        </Providers>
      </body>
    </html>
  );
}
