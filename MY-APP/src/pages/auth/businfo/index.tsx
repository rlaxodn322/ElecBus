import Head from 'next/head';
import MainLayout from '../../../layouts';
import Table from '../../../components/antd/businfo/table';
const MyPage = () => {
  return (
    <>
      <Head>
        <title>마이페이지</title>
        <meta name="description" content="마이페이지" />
      </Head>

      <Table />
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
