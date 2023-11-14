import Head from 'next/head';
import MainLayout from '../../../layouts';
import { Button } from 'antd';
import React from 'react';
import Link from 'next/link';

import 'antd-button-color/dist/css/style.css';

const MyPage = () => {
  const arr = ['버스번호', '차량번호', '위치', '운행상태'];
  const arr1 = ['강원71자1565', '90', '차고지', '미운행'];

  return (
    <>
      <Head>
        <title>버스관리</title>

        <meta name="description" content="버스관리" />
      </Head>

      <div
        style={{
          width: '1370px',
          height: '180px',
          display: 'flex',
          justifyContent: 'center',
          margin: '0 auto',
          paddingTop: '50px',
        }}
      >
        <div
          style={{
            width: '1370px',
            background: 'darkblue',
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '100px',
            borderRadius: '10px',
          }}
        >
          {arr.slice(0, 4).map((item, index) => (
            <span key={index} style={{ color: 'white', fontSize: '40px', marginRight: '100px' }}>
              {item}
            </span>
          ))}
        </div>
      </div>
      <div
        style={{
          width: '1370px',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          margin: '0 auto',
          paddingTop: '50px',
        }}
      >
        {' '}
        <div
          style={{
            width: '1370px',
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '100px',
            borderRadius: '10px',
          }}
        >
          {arr1.slice(0, 4).map((item, index) => (
            <span key={index} style={{ color: 'black', fontSize: '40px', marginRight: '100px' }}>
              {item}
            </span>
          ))}

          <Button type="warning" style={{ margin: '40px', boxShadow: '2px 2px 2px 2px grey' }}>
            상세정보
          </Button>
          <Button type="primary" style={{ boxShadow: '2px 2px 2px 2px grey' }}>
            정보변경
          </Button>
        </div>
      </div>
      <div
        style={{
          width: '1370px',
          height: '200px',
          display: 'flex',
          justifyContent: 'flex-end',
          margin: '0 auto',
          paddingTop: '50px',
          marginTop: '300px',
        }}
      >
        <Link href="/auth/lineimport">
          <Button type="primary" size="large" style={{ boxShadow: '2px 2px 2px 2px grey', fontSize: '18px' }}>
            노선등록
          </Button>
        </Link>
        <Link href="/auth/busimport">
          <Button
            style={{ boxShadow: '2px 2px 2px 2px grey', marginLeft: '20px', fontSize: '18px' }}
            type="primary"
            size="large"
          >
            버스등록
          </Button>
        </Link>
        <Link href="/auth/busdelete">
          <Button
            style={{ boxShadow: '2px 2px 2px 2px grey', marginLeft: '20px', marginRight: '70px', fontSize: '18px' }}
            size="large"
            type="primary"
            danger
          >
            버스삭제
          </Button>
        </Link>
      </div>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
