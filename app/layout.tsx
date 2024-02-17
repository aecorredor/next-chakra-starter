import '../src/styles/main.css';

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { Head } from '../src/components/Head';
import { theme } from '../src/styles/theme';
import { Layout } from '../src/components/Layout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider resetCSS theme={theme}>
          <Head />
          <Layout>{children}</Layout>
        </ChakraProvider>
      </body>
    </html>
  );
}
