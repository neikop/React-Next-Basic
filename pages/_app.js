import React from 'react';
import 'i18n';
import 'App.scss';

const App = ({ Component, pageProps }) => {
  const [isReady, setIsReady] = React.useState(false);
  React.useEffect(() => {
    setIsReady(true);
  }, []);
  return isReady && <Component {...pageProps} />;
};

export default App;
