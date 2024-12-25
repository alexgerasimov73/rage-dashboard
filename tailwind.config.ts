import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-0': '#131520',
        'bg-1': '#191B2A',
        'bg-2': '#1F2133',
        'bg-modal': 'rgba(0, 0, 0, 0.30)',
        'bg-trans-grey': 'rgba(16, 17, 25, 0.90)',
        'text-primary': '#F4F4F4',
        'text-secondary': '#A5A9C8',
        stroke: '#1F2133',
        brand: {
          DEFAULT: '#8F7DF8',
          1: '#9953FF',
          2: '#4C009A',
        },
        gray: {
          icon: '#B7BAD3',
          5: '#9195BB',
          6: '#686EA2',
          8: '#333653',
          9: '#26293F',
          10: 'rgba(19, 21, 32, 0.50)',
        },
        blue: '#0182FF',
        violet: '#8F7DF8',
        red: '#EA3943',
        white: '#F4F4F4',
      },
      fontSize: {
        base: ['16px', '140%'],
        sm: ['14px', '140%'],
        xs: ['12px', '140%'],
        xxs: ['10px', '140%'],
      },
      fontWeight: {
        'semi-bold': '600',
        regular: '400',
      },
      borderRadius: {
        4: '4px',
      },
      keyframes: {
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        contentShow: {
          from: {
            opacity: '0',
            transform: 'translate(-50%, -48%) scale(0.96)',
          },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
        slideUpAndFade: {
          from: { opacity: '0', transform: 'translateY(2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
