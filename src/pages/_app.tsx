import { AppProps } from 'next/app';
import Head from 'next/head';

import { GlobalStyle } from 'styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Trips</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A project to show spots that I've visited and is my favorite ones."
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
