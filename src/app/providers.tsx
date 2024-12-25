'use client';

import { getConfig } from '@/config/wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type PropsWithChildren, useState } from 'react';
import { type State, WagmiProvider } from 'wagmi';

import { hashFn } from 'wagmi/query';

interface Props extends PropsWithChildren {
  readonly initialState: State | undefined;
}

export function Providers({ children, initialState }: Props) {
  const [config] = useState(() => getConfig());
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            queryKeyHashFn: hashFn,
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 5,
          },
        },
      }),
  );

  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
