# Rage Dashboard

**Rage Dashboard** is a blockchain application that allows users to connect their Ethereum wallets, view token balances across Arbitrum, Optimism, and Hyperliquid, and send tokens to other wallets.

<!-- The app is optimized for RPC efficiency and provides a seamless user experience. -->

This project is built with **Next.js 15**, **React**, **TypeScript**, **React TanStack Query**, and **Wagmi**, and is deployed on Vercel.

## Features

1. **Ethereum Wallet Integration:**:

- Connect and disconnect Ethereum wallets.
- Supports all Ethereum wallets available in the browser.
- Copy the connected wallet's address.

2. **Details Table**:

- View Ethereum Wallet and Hyperliquid balances.
- Token balances for the Ethereum wallet on Arbitrum and Optimism.
- Token balances for Hyperliquid.

3. **Send Tokens**:

- Transfer any supported token to another wallet address.

## Tech Stack

- **Frontend**: [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [Next.js](https://nextjs.org/)
- **Data Fetching**: [React TanStack Query](https://tanstack.com/query/latest)
- **Wallet Integration**: [Wagmi](https://wagmi.sh/)
- **Blockchain Network**: Arbitrum, Optimism, and Hyperliquid
- **Styling**: [Tailwind](https://tailwindcss.com/)
- **Icons**: [Solar Icon Set](https://www.npmjs.com/package/solar-icon-set)

## Deployment

The application is deployed on [Vercel](https://vercel.com/). You can view the live demo [here](https://rage-dashboard.vercel.app/).

## Supported Tokens

- Networks: Arbitrum, Optimism:

  - Supported tokens: USDC, WBTC, ETH, WETH, LINK, UNI, USDT, ARB, SOL.

- Hyperliquid:
  - All tokens provided by the Hyperliquid API.

## Prerequisites

- Node.js (v16+)
- Yarn or npm

## Getting Started

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/alexgerasimov73/rage-dashboard.git
```

```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open http://localhost:3000 with your browser to see the application.

## How It Works

### Wallet Integration

Users can connect their Ethereum wallets to the app using Wagmi. The app supports all Ethereum-compatible wallets available in the browser.

### Account Overview

- Users can switch between different Tags (Balance, Connected Wallet, Hyperliquid).
- Each tag displays token balances in a table format, including the token's value in USD.

### Send Tokens

- Users can specify the amount of a token to send and the recipient's wallet address.
- The app interacts with the Ethereum blockchain to execute the transfer.

## Performance and Optimization

- **RPC Optimization**: The app minimizes RPC costs by batching and caching API calls using React Tanstack Query.
- **Efficient Data Fetching**: Token balances and prices are retrieved only when necessary, reducing unnecessary network requests.

<!-- ## Future Enhancements

- **Mobile and Tablet Responsiveness**: It'll be added fully responsive layouts for mobile and tablet devices.
- **Refactoring the code base**: It needs to get rid of TODO's, optimize, and refactor code out where it's necessary.
- **Test covering**: The application will be covered with tests.
- **Enhanced Analytics**: Include analytics for wallet activity and transactions. -->

**Free Software, Hell Yeah!**
