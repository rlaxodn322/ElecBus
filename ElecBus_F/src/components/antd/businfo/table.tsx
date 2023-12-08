import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';

const style: React.CSSProperties = {
  background: 'white',
  padding: '8px 0',
  width: '150px',
  height: '150px',
  borderRadius: '20px',
  border: '1px solid lightgrey',
  boxShadow: '1px 1px 1px 1px lightgrey',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  color: '#333', // Dark gray color
};

const containerStyle: React.CSSProperties = {
  width: '1370px',
  margin: '0 auto',
  paddingTop: '20px',
};

const dummyDataVersions = [
  [
    { label: '운행상태', info: '운행 중' },
    { label: '모터온도', info: '50°C' },
    { label: '모터제어기온도', info: '60°C' },
    { label: '에어펌프', info: '작동 중' },
    { label: '배터리SOC', info: '80%' },
    { label: '배터리최고온도', info: '45°C' },
    { label: '배터리 최저온도', info: '25°C' },
    { label: '배터리팩 충전상태', info: '충전 중' },
    { label: '배터리팩 상세온도', info: '40°C' },
    { label: '배터리 소화기 상태', info: '정상' },
    { label: 'Low RPM', info: '1200' },
    { label: 'High RPM', info: '3000' },
  ],
  [
    { label: '운행상태', info: '주차 중' },
    { label: '모터온도', info: '40°C' },
    { label: '모터제어기온도', info: '55°C' },
    { label: '에어펌프', info: '정지' },
    { label: '배터리SOC', info: '60%' },
    { label: '배터리최고온도', info: '40°C' },
    { label: '배터리 최저온도', info: '20°C' },
    { label: '배터리팩 충전상태', info: '미충전' },
    { label: '배터리팩 상세온도', info: '35°C' },
    { label: '배터리 소화기 상태', info: '이상' },
    { label: 'Low RPM', info: '1000' },
    { label: 'High RPM', info: '2500' },
  ],
];

const App: React.FC = () => {
  const [currentVersionIndex, setCurrentVersionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVersionIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const currentVersionData = dummyDataVersions[currentVersionIndex];

  return (
    <div style={containerStyle}>
      <Row gutter={1}>
        {currentVersionData.map((data, index) => (
          <Col key={index} span={4}>
            <div style={{ margin: '5px', width: 'max-content' }}>
              <div style={style}>
                <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{data.label}</div>
                <div style={{ fontSize: '18px' }}>{data.info}</div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default App;
