import React, { Suspense, useEffect } from 'react';
import './assets/scss/index.scss'
import MainRouter from 'router';
import { Layout } from 'layouts';

function App() {
  return (
    <div className="co-mainwrap">
      <Layout>
        <MainRouter />
      </Layout>
    </div>
  );
}

export default App;
