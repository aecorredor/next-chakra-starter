export const SEOMeta = {
  title: 'TODO-SEO-META-TITLE',
  titleTemplate: '%s - TODO-SEO-META-TITLE',
  description:
    'TODO SEO description.',
  openGraph: {
    title: 'TODO-OPEN-GRAPH-TITLE',
    description:
      'TODO SEO description.',
    type: 'website',
    url: typeof window !== 'undefined' ? window.origin : 'https://TODO-domain.com',
    site_name: 'TODO-SITE-NAME',
    images: [
      {
        url: '/images/android-chrome-512x512.png',
        width: '512',
        height: '512',
        alt: 'TODO-SITE-NAME Logo',
      },
    ],
  },
  twitter: {
    handle: '@TODO-twitter-handle',
    site: '@TODO-twitter-handle',
    cardType: 'summary_large_image',
  },
} as const;
