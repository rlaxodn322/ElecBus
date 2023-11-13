import Head from 'next/head';
import MainLayout from '../../../layouts';
import Table from '../../../components/antd/buslist/table';
import { Button } from 'antd';
import 'antd-button-color/dist/css/style.css';
const MyPage = () => {
  const arr = ['버스번호', '차량번호', '위치', '운행상태'];
  const arr1 = ['강원71자1565', '90', '차고지', '미운행'];
  const arr2 = ['강원70자8021', '33', '차고지', '미운행'];
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
          <Button type="warning" style={{ margin: '40px' }}>
            상세정보
          </Button>
          <Button type="primary">정보변경</Button>
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
        <Button type="primary" style={{ marginRight: '70px', fontSize: '18px' }}>
          노선등록
        </Button>
      </div>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
