import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { ThemeProvider } from '@emotion/react';
import { Theme } from 'src/styles/Theming';
import Layaout from './Layaout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <Layaout>
        <Component {...pageProps} />
      </Layaout>
    </ThemeProvider>
  );
}

export default MyApp;
