import { arbitrum, mainnet, optimism } from 'wagmi/chains';
import { Network, Token } from './types';

export const APP_NAME = 'Rage Dashboard';
export const NO_INDEX_PAGE = { robots: { index: false, follow: false } };
export const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3/simple/price';
export const HYPERLIQUID_API_URL = 'https://api.hyperliquid.xyz/info';
export const DOLLAR_PATTERN = '0,0.00';
export const TOKEN_PATTERN = '0,0.000';

export const chainIds = {
  [Network.ARBITRUM]: arbitrum.id,
  [Network.OPTIMISM]: optimism.id,
  [Network.ETHEREUM]: mainnet.id,
};

export const tokenIds = [
  'usd-coin',
  'wrapped-bitcoin',
  'ethereum',
  'wrapped-ether',
  'chainlink',
  'uniswap',
  'tether',
  'arbitrum',
  'solana',
];

export const TOKENS = ['USDT', 'USDC', 'ETH', 'WBTC', 'WETH', 'LINK', 'UNI', 'ARB', 'SOL'];

export const SUPPORTED_TOKENS: Token[] = [
  { symbol: 'ETH', id: 'ethereum', network: Network.ARBITRUM },
  { symbol: 'ETH', id: 'ethereum', network: Network.OPTIMISM },
  {
    symbol: 'USDC',
    id: 'usd-coin',
    address: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
    network: Network.ARBITRUM,
  },
  {
    symbol: 'USDC',
    id: 'usd-coin',
    address: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
    network: Network.OPTIMISM,
  },
  {
    symbol: 'WBTC',
    id: 'wrapped-bitcoin',
    address: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
    network: Network.ARBITRUM,
  },
  {
    symbol: 'WBTC',
    id: 'wrapped-bitcoin',
    address: '0x68f180fcCe6836688e9084f035309E29Bf0A2095',
    network: Network.OPTIMISM,
  },
  {
    symbol: 'WETH',
    id: 'wrapped-ether',
    address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    network: Network.ARBITRUM,
  },
  {
    symbol: 'WETH',
    id: 'wrapped-ether',
    address: '0x4200000000000000000000000000000000000006',
    network: Network.OPTIMISM,
  },
  {
    symbol: 'LINK',
    id: 'chainlink',
    address: '0xf97f4df75117a78c1A5a0DBb814Af92458539FB4',
    network: Network.ARBITRUM,
  },
  {
    symbol: 'LINK',
    id: 'chainlink',
    address: '0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6',
    network: Network.OPTIMISM,
  },
  {
    symbol: 'UNI',
    id: 'uniswap',
    address: '0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0',
    network: Network.ARBITRUM,
  },
  {
    symbol: 'UNI',
    id: 'uniswap',
    address: '0x6fd9d7AD17242c41f7131d257212c54A0e816691',
    network: Network.OPTIMISM,
  },
  {
    symbol: 'USDT',
    id: 'tether',
    address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
    network: Network.ARBITRUM,
  },
  {
    symbol: 'USDT',
    id: 'tether',
    address: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
    network: Network.OPTIMISM,
  },
  {
    symbol: 'ARB',
    id: 'arbitrum',
    address: '0x912CE59144191C1204E64559FE8253a0e49E6548',
    network: Network.ARBITRUM,
  },
  {
    symbol: 'SOL',
    id: 'solana',
    address: '0x2bcC6D6CdBbDC0a4071e48bb3B969b06B3330c07',
    network: Network.ARBITRUM,
  },
];
