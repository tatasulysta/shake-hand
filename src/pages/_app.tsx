import 'styles/globals.css';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import i18n from 'locales';

import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';
import { I18nextProvider } from 'react-i18next';
import Head from 'next/head';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            // This is used in globals.css
            --font-primary: ${poppins.style.fontFamily};
          }
        `}
      </style>

      <Head>
        <title>ShakeHand</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <I18nextProvider i18n={i18n}>
        <MantineProvider>
          <Notifications />
          <Component {...pageProps} />
        </MantineProvider>
      </I18nextProvider>
    </>
  );
}
