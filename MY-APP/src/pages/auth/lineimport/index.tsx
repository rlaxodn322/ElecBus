import Head from 'next/head';
import MainLayout from '../../../layouts';
import Table from '../../../components/antd/busimport/table';
const MyPage = () => {
  return (
    <>
      <Head>
        <title>노선등록</title>
        <meta name="description" content="노선등록" />
      </Head>
      <div
        style={{
          width: '1370px',
          height: '500px',
          display: 'flex',
          justifyContent: 'center',
          margin: '0 auto',
          paddingTop: '50px',
        }}
      >
        <Table />
      </div>
      <div></div>
      <div></div>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
