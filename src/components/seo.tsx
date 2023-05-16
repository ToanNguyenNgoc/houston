import React from 'react';
import Head from 'next/head';

interface SeoProps {
  title: string,
  description: string,
  url: string,
  image_url?: string
}

export function Seo(props: SeoProps) {
  const domain = "https://houstongarden.click"
  const { title, description, url, image_url } = props
  return (
    <Head>
      <title>{title + " " + "| Houston Garden"}</title>
      <meta name="title" content={title + "| Houston Garden"} />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${domain}${url}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image_url ?? ''} />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${domain}${url}`} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image_url ?? ''}></meta>
    </Head>
  );
}