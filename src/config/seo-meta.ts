export const SEOMeta = {
  title: 'DraftFantom',
  titleTemplate: '%s - DraftFantom',
  description:
    'Play draft fantasy soccer leagues and games with your friends. Mix and match players from the Premier League, La Liga, Serie A, Bundesliga, Ligue 1, and more.',
  openGraph: {
    title: 'DraftFantom',
    description:
      'Play draft fantasy soccer leagues and games with your friends. Mix and match players from the Premier League, La Liga, Serie A, Bundesliga, Ligue 1, and more.',
    type: 'website',
    url: typeof window !== 'undefined' ? window.origin : 'https://draftfantom.com',
    site_name: 'DraftFantom',
    images: [
      {
        url: '/images/android-chrome-512x512.png',
        width: '512',
        height: '512',
        alt: 'DraftFantom Logo',
      },
    ],
  },
  twitter: {
    handle: '@draftfantom',
    site: '@draftfantom',
    cardType: 'summary_large_image',
  },
} as const;
