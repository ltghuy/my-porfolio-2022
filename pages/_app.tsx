import Head from 'next/head'
import '../styles/color.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicon/favicon-512x512.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/favicon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preload" as="image" href="/images/backdrop2.jpg" />
        <link rel="preload" as="image" href="/images/huyle.jpg" />
        <link rel="preload" as="image" href="/images/2048.gif" />
        <link rel="preload" as="image" href="/images/moren.gif" />
        <link rel="preload" as="image" href="/images/pokemon.gif" />
        <link rel="preload" as="image" href="/images/remove.gif" />
        <link rel="preload" as="image" href="/images/backdrop2.gif" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
