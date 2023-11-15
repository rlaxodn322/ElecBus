import Head from 'next/head';
import MainLayout from '../../../layouts';
import Table from '../../../components/antd/busimport/table1';
const MyPage = () => {
  return (
    <>
      <Head>
        <title>버스등록</title>
        <meta name="description" content="버스등록" />
      </Head>
      <div
        style={{
          width: '1370px',
          margin: '0 auto',
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
