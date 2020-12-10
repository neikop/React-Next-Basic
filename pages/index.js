import Head from 'next/head';

const Home = () => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Bùng Binh</title>
      </Head>
      <header className="App-Header-container">{/* <AppHeader /> */}</header>
      <main id="main" className="App-Content-container">
        <div className="Content-container flex-row align-items-start">
          <div className="Content-Nav-bar">{/* <AppMenu fixed /> */}</div>
          <div className="Content-Center"> </div>
          <div className="Content-Side-bar">
            {/* <PerfectScrollbar>
              <AppSidebar />
            </PerfectScrollbar> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
