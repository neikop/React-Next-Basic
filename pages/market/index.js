import App from 'App';
import Head from 'next/head';

export default function Page() {
  return (
    <>
      <App />
      <Head>
        <meta property="og:title" content="Oktapus Finance - Market" />
      </Head>
    </>
  );
}
