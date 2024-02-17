import React from 'react';

import { SEO } from './SEO';

export const Head: React.FC = () => {
  return (
    <SEO>
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
      <link
        rel="apple-touch-icon"
        href="/images/apple-touch-icon.png"
        sizes="180x180"
      />
    </SEO>
  );
};
