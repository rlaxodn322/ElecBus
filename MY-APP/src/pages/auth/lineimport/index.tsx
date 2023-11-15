import Head from 'next/head';
import MainLayout from '../../../layouts';
import Table from '../../../components/antd/busimport/table';
import Pagination from '../../../components/antd/pagination/table';
const MyPage = () => {
  return (
    <>
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
