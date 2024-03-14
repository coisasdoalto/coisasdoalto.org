import { Metadata } from 'next';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';

import { theme } from '~/theme';

import { HOME_OG_IMAGE_URL } from '~/lib/constants';

import '@mantine/core/styles.css';

export const metadata: Metadata = {
  title: 'Coisas do Alto',
  description: 'Uma coletânea de artigos cristãos sobre as Coisas do Alto',
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="pt-BR">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
