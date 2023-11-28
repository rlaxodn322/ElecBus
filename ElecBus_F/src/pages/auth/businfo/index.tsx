import Head from 'next/head';
import MainLayout from '../../../layouts';
import Table from '../../../components/antd/businfo/table';
import BusChoice from '../../../components/antd/buschoice/table';
import DateTable from '../../../components/antd/busdate/table';
import ErrorTable from '../../../components/antd/buserror/table';
import { Button } from 'antd';
import Pagination from '../../../components/antd/pagination/table';

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
        key="table1" // 고유한 키 추가
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
        key="table2" // 고유한 키 추가
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
        key="busChoice" // 고유한 키 추가
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
        key="dateTable" // 고유한 키 추가
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
        key="errorTableContainer" // 고유한 키 추가
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
        <Button size="large" style={{ boxShadow: '2px 2px 2px 2px lightgrey' }}>
          엑셀 다운로드
        </Button>
      </div>
      <ErrorTable key="errorTable" /> // 고유한 키 추가
      <div
        key="paginationContainer" // 고유한 키 추가
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '1370px',
          height: '100%',
          margin: '0 auto',
          marginTop: '50px',
        }}
      >
        <Pagination />
      </div>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
