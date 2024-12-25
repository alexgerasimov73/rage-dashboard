import { NO_INDEX_PAGE } from '@/config/constants';
import type { Metadata } from 'next';
import { HyperliquidTable } from './HyperliquidTable';

export const metadata: Metadata = {
  title: 'Hyperliquid',
  ...NO_INDEX_PAGE,
};

const HyperliquidPage = () => <HyperliquidTable />;

export default HyperliquidPage;
