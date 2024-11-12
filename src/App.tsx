import { Helmet } from 'react-helmet';
import { SpeedInsights } from '@vercel/speed-insights/react';

import MainLayout from './components/layouts/MainLayout';

function App() {
  return (
    <>
      <Helmet>
        <title>Dara.</title>
        <meta name="description" content="Dara Heng - Software Engineer - Blockchain" />
        <meta name="keywords" content="Dara Heng, Software Engineer, Blockchain Developer, Web Application Development, Innovative Solutions, Creative Coding, Secure Applications, Efficient Problem Solving, Cutting-edge Technologies, Digital Innovation" />
        <link rel="canonical" href="https://www.daraheng.com" />
        <meta property="og:title" content="Dara Heng Portfolio Website" />
        <meta property="og:url" content="https://www.daraheng.com" />
        <meta property="og:type" content="website" />
      </Helmet>

      <MainLayout />

      <SpeedInsights />
    </>
  );
}

export default App;
