import Head from 'next/head';
import MainLayout from '../../../layouts';
import Table from '../../../components/antd/businfo/table';
import BusChoice from '../../../components/antd/buschoice/table';
import DateTable from '../../../components/antd/busdate/table';
import { Button } from 'antd';
import Link from 'next/link';

const MyPage = () => {
  const day = ['Day1', 'Day2', 'Day3']; // Replace with your data
  const car = ['Car1', 'Car2', 'Car3']; // Replace with your data
  const errorlo = ['Error1', 'Error2', 'Error3']; // Replace with your data
  const err = ['Err1', 'Err2', 'Err3']; // Replace with your data
  const check = ['Check1', 'Check2', 'Check3']; // Replace with your data
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
      <div style={{ border: '1px solid black' }}>
        <div
          style={{
            width: '1370px',
            display: 'flex',
            margin: '0 auto',
            paddingTop: '20px',
            alignItems: 'center',
            marginTop: '20px',

            borderRadius: '20px',
          }}
        >
          <div style={{ width: '25%', borderBottom: '1px solid black', fontSize: '25px', fontWeight: 'bold' }}>
            날짜
          </div>
          <div style={{ width: '25%', borderBottom: '1px solid black', fontSize: '25px', fontWeight: 'bold' }}>
            차량
          </div>
          <div style={{ width: '25%', borderBottom: '1px solid black', fontSize: '25px', fontWeight: 'bold' }}>
            에러위치
          </div>
          <div style={{ width: '25%', borderBottom: '1px solid black', fontSize: '25px', fontWeight: 'bold' }}>
            에러내용
          </div>
          <div style={{ width: '25%', borderBottom: '1px solid black', fontSize: '25px', fontWeight: 'bold' }}>
            비고
          </div>
        </div>
        <div
          style={{
            width: '1370px',
            display: 'flex',
            margin: '0 auto',
            paddingTop: '20px',
            alignItems: 'center',
            marginTop: '20px',
          }}
        >
          <div style={{ width: '25%', fontSize: '25px', fontWeight: 'bold' }}>{day[0]}</div>
          <div style={{ width: '25%', fontSize: '25px', fontWeight: 'bold' }}>{car[0]}</div>
          <div style={{ width: '25%', fontSize: '25px', fontWeight: 'bold' }}>{errorlo[0]}</div>
          <div style={{ width: '25%', fontSize: '25px', fontWeight: 'bold' }}>{err[0]}</div>
          <div style={{ width: '25%', fontSize: '25px', fontWeight: 'bold' }}>{check[0]}</div>
        </div>
        <div
          style={{
            width: '1370px',
            display: 'flex',
            margin: '0 auto',
            paddingTop: '20px',
            alignItems: 'center',
            marginTop: '20px',
          }}
        >
          <div style={{ width: '25%', fontSize: '25px', fontWeight: 'bold' }}>{day[1]}</div>
          <div style={{ width: '25%', fontSize: '25px', fontWeight: 'bold' }}>{car[1]}</div>
          <div style={{ width: '25%', fontSize: '25px', fontWeight: 'bold' }}>{errorlo[1]}</div>
          <div style={{ width: '25%', fontSize: '25px', fontWeight: 'bold' }}>{err[1]}</div>
          <div style={{ width: '25%', fontSize: '25px', fontWeight: 'bold' }}>{check[1]}</div>
        </div>
        <div
          style={{
            width: '1370px',
            display: 'flex',
            margin: '0 auto',
            paddingTop: '20px',
            alignItems: 'center',
            marginTop: '20px',
          }}
        >
          <div style={{ width: '25%', fontSize: '25px', fontWeight: 'bold' }}>{day[0]}</div>
          <div style={{ width: '25%', fontSize: '25px', fontWeight: 'bold' }}>{car[0]}</div>
          <div style={{ width: '25%', fontSize: '25px', fontWeight: 'bold' }}>{errorlo[0]}</div>
          <div style={{ width: '25%', fontSize: '25px', fontWeight: 'bold' }}>{err[0]}</div>
          <div style={{ width: '25%', fontSize: '25px', fontWeight: 'bold' }}>{check[0]}</div>
        </div>
      </div>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
