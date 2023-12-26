import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { Button, Input } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
const style: React.CSSProperties = {
  padding: '8px 0',
  width: '200px',
  height: '100px',
  borderRadius: '20px',
  border: '1px solid lightgrey',
  boxShadow: '1px 1px 1px 1px lightgrey',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  fontSize: '18px',
};
const style1: React.CSSProperties = {
  padding: '8px 0',
  width: '120px',
  height: '80px',
  borderRadius: '20px',
  border: '1px solid lightgrey',
  boxShadow: '1px 1px 1px 1px lightgrey',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  fontSize: '13px',
};
const containerStyle: React.CSSProperties = {
  width: '1370px',
  margin: '0 auto',
  paddingTop: '20px',
};

const determineBackgroundColor = (label, info) => {
  let backgroundColor = 'transparent';

  if (info) {
    if (label === '운행상태' && info === '주차 중') {
      backgroundColor = '#FF6347'; // Red
    } else if (label === '운행상태' && info === '운행 중') {
      backgroundColor = '#b2f5d8'; // Green
    } else if (label === '배터리 소화기 상태' && info === '이상') {
      backgroundColor = '#FF6347'; // Red
    } else if (label.includes('온도')) {
      const temperature = parseInt(info);
      backgroundColor = temperature > 40 ? '#FF6347' : '#b2f5d8';
    } else if (label === '충전 상태' && info === '충전 중') {
      backgroundColor = '#b2f5d8'; // Green
    } else if (label === '주행 거리') {
      const distance = parseInt(info.split(' ')[0]); // '100 km'에서 숫자 값 추출
      backgroundColor = distance < 100 ? '#FF6347' : '#b2f5d8';
    } else {
      backgroundColor = '#b2f5d8'; // Green
    }
  } else {
    backgroundColor = 'lightblue';
  }

  return backgroundColor;
};

const App: React.FC = () => {
  const router = useRouter();
  const { busNumber } = router.query;
  const [selectedVersion, setSelectedVersion] = useState(0);
  const [mqttData, setMqttData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/mqtt/getdata');
        const data = response.data;

        setMqttData(data);

        // 만약 버스 번호가 있다면 해당 버스 데이터로 설정
        if (busNumber) {
          setSelectedVersion(Number(busNumber) - 1);
        }
      } catch (error) {
        console.error('MQTT 데이터를 불러오는 중 에러 발생:', error);
      }
    };

    fetchData();
  }, [busNumber]);

  // 현재 선택한 버전의 데이터를 가져옵니다.
  const currentVersionData = selectedVersion < mqttData.length ? mqttData[selectedVersion].data : [];

  // 이제 generateDummyData1 함수 대신에 실제 서버에서 받아온 데이터를 사용합니다.
  const sohaData = mqttData.length > 0 ? mqttData[0].data : [];
  return (
    <>
      <div style={containerStyle}>
        <div style={{ width: '1370px', height: '100px' }}>
          <span
            style={{
              fontSize: '30px',
              background: '#005cce',
              color: 'white',
              padding: '20px',
              borderRadius: '10px',
              fontWeight: 'bold',
            }}
          >
            {selectedVersion + 1}호
          </span>
        </div>

        <div style={{ width: '1370px', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '70%' }}>
            <h1> {selectedVersion + 1}호기 상태정보</h1>
            <Row gutter={1}>
              {currentVersionData.map((data, index) => (
                <Col key={index} span={7.8}>
                  <div style={{ margin: '5px', width: 'max-content' }}>
                    <div
                      style={{
                        ...style,
                        background: determineBackgroundColor(data.label, data.info),
                        color: determineBackgroundColor(data.label, data.info) === '#FF6347' ? 'white' : '#333',
                      }}
                    >
                      <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{data.label}</div>
                      {data.info && <div>{data.info}</div>}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>

          <div style={{ width: '30%' }}>
            <h1> 화재 방지 시스템</h1>
            <Row className="soha">
              {sohaData && sohaData.length > 0 ? (
                sohaData.map((data, index) => (
                  <Col key={index} span={7.5}>
                    <div style={{ margin: '5px', width: 'max-content' }}>
                      <div
                        style={{
                          ...style1,
                          background: determineBackgroundColor(data.label, data.info),
                          color: determineBackgroundColor(data.label, data.info) === '#FF6347' ? 'white' : '#333',
                        }}
                      >
                        <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{data.label}</div>
                        {data.info && <div>{data.info}</div>}
                      </div>
                    </div>
                  </Col>
                ))
              ) : (
                <div>데이터가 없습니다.</div>
              )}
              <Col>
                <img
                  src={'/images/img.jpg'}
                  style={{ width: '350px', height: '300px', marginTop: '20px' }}
                  alt="soha-image"
                />
              </Col>
            </Row>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <Link href="/">
            <Button type="info">이전</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default App;
