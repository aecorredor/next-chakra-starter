import { Fragment, ReactNode } from 'react';
import Head from 'next/head';

import { SEOMeta } from '../config/seo-meta';

interface OgImage {
  url: string;
  width?: string;
  height?: string;
  alt?: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  robots?: string;
  openGraph?: {
    title?: string;
    type?: string;
    locale?: string;
    description?: string;
    site_name?: string;
    url?: string;
    images?: OgImage[];
  };
  children?: ReactNode;
}

const ogImage = ({ width, height, alt }: OgImage, index: number) => {
  return (
    <Fragment key={`og:image:${index}`}>
      {/* <meta
        key={`og:image:url:${index}`}
        property="og:image"
        content={imgUrl}
      /> */}
      <meta
        key={`og:image:width:${index}`}
        property="og:image:width"
        content={width}
      />
      <meta
        key={`og:image:height:${index}`}
        property="og:image:height"
        content={height}
      />
      <meta
        key={`og:image:alt:${index}`}
        property="og:image:alt"
        content={alt}
      />
    </Fragment>
  );
};

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  openGraph,
  robots,
  children,
}) => {
  /**
   * @see https://nextjs.org/docs/api-reference/next/head
   *
   * meta or any other elements need to be contained as direct children of the
   * Head element, or wrapped into maximum one level of <React.Fragment> or
   * arrays otherwise the tags won't be correctly picked up on client-side
   * navigations.
   *
   * The `key` property makes the tag to only be rendered once.
   */
  return (
    <Head>
      <title key="title">
        {title
          ? `${SEOMeta.titleTemplate.replace(/%s/g, title)}`
          : SEOMeta.title}
      </title>

      <meta
        key="description"
        name="description"
        content={description || SEOMeta.description}
      />

      <meta
        key="og:type"
        property="og:type"
        content={openGraph?.type ?? SEOMeta.openGraph.type}
      />

      <meta
        key="og:title"
        property="og:title"
        content={
          openGraph?.title ?? SEOMeta.openGraph.title ?? title ?? SEOMeta.title
        }
      />

      <meta
        key="og:description"
        property="og:description"
        content={
          openGraph?.description ??
          SEOMeta.openGraph.description ??
          description ??
          SEOMeta.description
        }
      />

      <meta
        key="og:site_name"
        property="og:site_name"
        content={openGraph?.site_name ?? SEOMeta.openGraph.site_name}
      />

      <meta
        key="og:url"
        property="og:url"
        content={openGraph?.url ?? SEOMeta.openGraph.url}
      />

      {openGraph?.locale && (
        <meta key="og:locale" property="og:locale" content={openGraph.locale} />
      )}

      {openGraph?.images?.length
        ? openGraph.images.map((img, index) => ogImage(img, index))
        : ogImage(SEOMeta.openGraph.images[0], 0)}

      {SEOMeta.twitter.cardType && (
        <meta
          key="twitter:card"
          name="twitter:card"
          content={SEOMeta.twitter.cardType}
        />
      )}

      {SEOMeta.twitter.site && (
        <meta
          key="twitter:site"
          name="twitter:site"
          content={SEOMeta.twitter.site}
        />
      )}

      {SEOMeta.twitter.handle && (
        <meta
          key="twitter:creator"
          name="twitter:creator"
          content={SEOMeta.twitter.handle}
        />
      )}

      <meta key="robots" name="robots" content={robots ?? 'index,follow'} />

      <meta
        key="googlebot"
        name="googlebot"
        content={robots ?? 'index,follow'}
      ></meta>

      {children}
    </Head>
  );
};
