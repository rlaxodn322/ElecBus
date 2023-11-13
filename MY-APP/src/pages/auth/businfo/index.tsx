import Head from 'next/head';
import MainLayout from '../../../layouts';
import Table from '../../../components/antd/businfo/table';
const MyPage = () => {
  return (
    <>
      <Head>
        <title>버스관리</title>
        <meta name="description" content="버스관리" />
      </Head>
      <div
        style={{
          width: '1370px',
          height: '500px',
          display: 'flex',
          justifyContent:'center',
          margin: '0 auto',
          paddingTop:'50px',
        }}
      ><Table/></div>
      <div></div>
      <div></div>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
