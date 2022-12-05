import type { AppProps } from 'next/app'
import Head from 'next/head'
import Cursor from '../components/Cursor'
import '../styles/color.css'
import '../styles/globals.css'

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
        <link rel="preload" as="image" href="/images/backdrop2.gif" />
        <link rel="preload" as="image" href="/images/home-bg.jpg" />
        <link rel="preload" as="image" href="/images/huyle.jpg" />
        <link
          rel="preload"
          as="video"
          type="video/mp4"
          href="/images/moren.mp4"
        />
        <link
          rel="preload"
          as="video"
          type="video/mp4"
          href="/images/pokemon.mp4"
        />
        <link
          rel="preload"
          as="video"
          type="video/mp4"
          href="/images/2048.mp4"
        />
        <link
          rel="preload"
          as="video"
          type="video/mp4"
          href="/images/remove-bg.mp4"
        />
      </Head>
      <Cursor />
      <Component {...pageProps} />
    </>
  )
}
