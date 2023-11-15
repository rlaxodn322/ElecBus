import Head from 'next/head';
import MainLayout from '../../../layouts';
import { Button } from 'antd';
import React from 'react';
import Link from 'next/link';
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
      <div>
        <div style={{ width: '1370px', height: '300px', marginTop: '100px', margin: '0 auto' }}>
          <Grid />
        </div>
      </div>

      <div
        style={{
          width: '1370px',
          height: '100%',
          margin: '0 auto',
          marginTop: '50px',
        }}
      >
        <Table2
          style={{
            width: '1370px',
            height: '100%',
          }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <Pagination />
      </div>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
