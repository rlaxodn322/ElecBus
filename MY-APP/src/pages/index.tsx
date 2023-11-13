import Head from 'next/head';
import MainLayout from '../layouts';
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
      <Card></Card> 
      <Page></Page>
    </>
  );
};

Home.layout = MainLayout;

export default Home;
