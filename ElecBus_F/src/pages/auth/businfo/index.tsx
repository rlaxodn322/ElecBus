import Head from 'next/head';
import MainLayout from '../../../layouts/Main';
import Table from '../../../components/antd/businfo/table';
import BusChoice from '../../../components/antd/buschoice/table';
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
        style={{
          width: '1370px',
          display: 'flex',
          justifyContent: 'flex-start',
          margin: '0 auto',
          paddingTop: '20px',
        }}
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
          paddingTop: '20px',
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
        <h1>Error Log </h1>
      </div>
      <div
        style={{
          width: '1370px',
          margin: '0 auto',
          paddingTop: '20px',
          alignItems: 'center',
        }}
      >
        <ErrorTable key="errorTable" />
      </div>
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
        {/* <Pagination /> */}
      </div>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
