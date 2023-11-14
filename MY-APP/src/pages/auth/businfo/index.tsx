import Head from 'next/head';
import MainLayout from '../../../layouts';
import Table from '../../../components/antd/businfo/table';
import ErrorTable from '../../../components/antd/buserror/table';
import { Button } from 'antd';
import Link from 'next/link';
const MyPage = () => {
  return (
    <>
      <Head>
        <title>오류관리</title>
        <meta name="description" content="오류관리" />
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
      <h1
        style={{
          width: '1370px',
          display: 'flex',
          justifyContent: 'flex-start',
          margin: '0 auto',
          paddingTop: '20px',
        }}
      >
        통계 정보
      </h1>

      <div
        style={{
          width: '1370px',
          display: 'flex',
          justifyContent: 'flex-start',
          margin: '0 auto',
          paddingTop: '20px',
        }}
      >
        <ErrorTable />
      </div>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
