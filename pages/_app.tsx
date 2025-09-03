import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Montserrat, Bebas_Neue } from 'next/font/google';
import '@/styles/globals.css';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400','500','700','800'], display: 'swap' });
const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400', display: 'swap', variable: '--font-bebas' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className={`${montserrat.className} ${bebas.variable}`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

