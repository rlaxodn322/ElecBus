import Head from 'next/head';
import MainLayout from '../../../layouts/Main';
import Table from '../../../components/antd/businfo/tablecopy';
import BusChoice from '../../../components/antd/buschoice/table';
import ErrorTable from '../../../components/antd/buserror/table';

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
          paddingTop: '20px',
        }}
      >
        <Table />
      </div>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
