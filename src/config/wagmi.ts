import { cookieStorage, createConfig, createStorage, http } from 'wagmi';
import { arbitrum, mainnet, optimism } from 'wagmi/chains';
import { walletConnect } from 'wagmi/connectors';

export const getConfig = () => {
  return createConfig({
    chains: [arbitrum, optimism, mainnet],
    connectors: [walletConnect({ projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID || '' })],
    storage: createStorage({
      storage: cookieStorage,
    }),
    ssr: true,
    transports: {
      [arbitrum.id]: http(),
      [optimism.id]: http(),
      [mainnet.id]: http(),
    },
  });
};

declare module 'wagmi' {
  interface Register {
    config: ReturnType<typeof getConfig>;
  }
}
