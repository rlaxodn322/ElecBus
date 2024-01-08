import Head from 'next/head';
import MainLayout from '../layouts/Main';
import { Page } from './style';
// import App from '../components/antd/timeline';
import Card from '../components/antd/card';

// import FormDisabledDemo from '../components/antd/signup';

const Home = () => {
  return (
    <>
      <Head>
        <title>HOME</title>
        <meta name="description" content="text." />
      </Head>

      <Page>
        <Card />
      </Page>
    </>
  );
};

Home.layout = MainLayout;

export default Home;
