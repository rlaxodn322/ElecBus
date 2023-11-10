import Head from 'next/head';
import MainLayout from '../../../layouts';

const MyPage = () => {
  return (
    <>
      <Head>
        <title>마이페이지</title>
        <meta name="description" content="마이페이지" />
      </Head>
  
      <div>
        <h2>버스 관리</h2>
      </div>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
