import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0f172a',
        fuchsia: '#f472b6',
        neon: '#a855f7'
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui']
      }
    }
  },
  plugins: []
};

export default config;
