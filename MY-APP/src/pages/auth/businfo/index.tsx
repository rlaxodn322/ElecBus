import Head from 'next/head';
import MainLayout from '../../../layouts';
import Table from '../../../components/antd/businfo/table';
import { Button } from 'antd';
import Link from 'next/link';
const MyPage = () => {
  return (
    <>
      <Head>
        <title>버스관리</title>
        <meta name="description" content="버스관리" />
      </Head>
      <h1
        style={{ width: '1370px', display: 'flex', justifyContent: 'flex-start', margin: '0 auto', paddingTop: '20px' }}
      >
        차량제어기 상태정보
      </h1>
      <div
        style={{
          width: '1370px',
          display: 'flex',
          justifyContent: 'center',
          margin: '0 auto',
          paddingTop: '50px',
        }}
      >
        <Table />
      </div>
      <div
        style={{
          width: '1370px',
          display: 'flex',
          justifyContent: 'center',
          margin: '0 auto',
        }}
      >
        <Table />
      </div>
      <div
        style={{
          width: '1370px',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '300px',
          marginLeft: '700px',
        }}
      >
        <Link href="/auth/busimport">
          <Button style={{ boxShadow: '2px 2px 2px 2px grey' }} type="primary" size="large">
            버스등록
          </Button>
        </Link>
      </div>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
