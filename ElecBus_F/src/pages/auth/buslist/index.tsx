import Head from 'next/head';
import MainLayout from '../../../layouts/Main';

import React from 'react';
import Table2 from '../../../components/antd/buslist/table2';
import 'antd-button-color/dist/css/style.css';
import Grid from '../../../components/antd/buslist/grid';
import Pagination from '../../../components/antd/pagination/table';

const MyPage = () => {
  return (
    <>
      <Head>
        <title>버스관리</title>
        <meta name="description" content="버스관리" />
      </Head>

      <div style={{ width: '1370px', height: '300px', margin: '0 auto' }}>
        <Grid />
      </div>

      <div style={{ width: '1370px', height: '100%', margin: '0 auto', marginTop: '50px' }}>
        <Table2 />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <Pagination />
      </div>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
