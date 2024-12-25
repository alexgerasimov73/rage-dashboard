import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { cookieToInitialState } from 'wagmi';
import { Providers } from './providers';
import { getConfig } from '@/config/wagmi';
import type { PropsWithChildren } from 'react';
import { headers } from 'next/headers';
import { Header } from '@/components/layout/header/Header';

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
        </Providers>
      </body>
    </html>
  );
}
