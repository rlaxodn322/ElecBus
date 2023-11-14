import Head from 'next/head';
import MainLayout from '../../../layouts';
import Table from '../../../components/antd/businfo/table';
import BusChoice from '../../../components/antd/buschoice/table';
import DateTable from '../../../components/antd/busdate/table';
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
          marginTop: '80px',
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
        <BusChoice />
      </div>
      <div
        style={{
          width: '1370px',
          display: 'flex',
          justifyContent: 'flex-start',
          margin: '0 auto',
          paddingTop: '10px',
        }}
      >
        <DateTable />
      </div>
      <div
        style={{
          width: '1370px',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0 auto',
          paddingTop: '20px',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <h1>에러기록</h1>
        <Button size="large" type="primary">
          엑셀 다운로드
        </Button>
      </div>

      <ErrorTable />
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
