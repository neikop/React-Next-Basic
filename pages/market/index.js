import React from 'react';
import App from 'App';
import Head from 'next/head';

export default function Page() {
  const [isReady, setIsReady] = React.useState(false);
  React.useEffect(() => {
    setIsReady(true);
  }, []);

  console.log('MARKET');
  return (
    <>
      <Head>
        <meta property="og:title" content="Oktapus Finance - Market" />
      </Head>
      {isReady && <App />}
    </>
  );
}
