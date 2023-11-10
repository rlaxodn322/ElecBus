import Head from 'next/head';
import MainLayout from '../layouts';
import { Page } from './style';
// import App from '../components/antd/timeline';
import App from '../components/antd/card';
// import FormDisabledDemo from '../components/antd/signup';


const Home = () => {
  return (
    <>
      <Head>
        <title>HOME</title>
        <meta name="description" content="text." />
      </Head> 
      <App></App> 
      <Page></Page>
    </>
  );
};

Home.layout = MainLayout;

export default Home;
