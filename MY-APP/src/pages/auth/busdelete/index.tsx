import Head from 'next/head';
import MainLayout from '../../../layouts';
import { Button } from 'antd';
import React from 'react';
import Link from 'next/link';

import 'antd-button-color/dist/css/style.css';

const MyPage = () => {
  const arr = ['버스번호', '시리얼넘버'];
  const arr1 = ['강원71자1565', 'ganwon1565'];

  return (
    <>
      <Head>
        <title>통계정보</title>

        <meta name="description" content="통계정보" />
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
          height: '500px',
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
          height: '500px',
          display: 'flex',
          justifyContent: 'flex-end',
          margin: '0 auto',
          paddingTop: '50px',
        }}
      >
        <Link href="/auth/businfo">
          <Button
            type="primary"
            size="large"
            style={{ marginRight: '70px', boxShadow: '2px 2px 2px 2px grey', fontSize: '18px' }}
          >
            취소
          </Button>
        </Link>
      </div>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
