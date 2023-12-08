import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';

const style: React.CSSProperties = {
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
  fontSize: '18px',
};

const containerStyle: React.CSSProperties = {
  width: '1370px',
  margin: '0 auto',
  paddingTop: '20px',
};

const generateDummyData = (version) => {
  return [
    { label: '운행상태', info: version % 2 === 0 ? '운행 중' : '주차 중' },
    { label: '모터온도', info: `${Math.floor(Math.random() * 61) + 20}°C` },
    { label: '모터제어기온도', info: `${Math.floor(Math.random() * 61) + 20}°C` },
    { label: '에어펌프', info: version % 2 === 0 ? '작동 중' : '정지' },
    { label: '배터리SOC', info: `${Math.floor(Math.random() * 61) + 20}%` },
    { label: '배터리최고온도', info: `${Math.floor(Math.random() * 41) + 20}°C` },
    { label: '배터리 최저온도', info: `${Math.floor(Math.random() * 21) + 20}°C` },
    { label: '배터리팩 충전상태', info: version % 2 === 0 ? '충전 중' : '미충전' },
    { label: '배터리팩 상세온도', info: `${Math.floor(Math.random() * 31) + 20}°C` },
    { label: '배터리 소화기 상태', info: version % 2 === 0 ? '정상' : '이상' },
    { label: 'Low RPM', info: `${Math.floor(Math.random() * 1001) + 1000}` },
    { label: 'High RPM', info: `${Math.floor(Math.random() * 2001) + 1000}` },
    // 전기차 관련 dummy data
    { label: '충전 상태', info: version % 2 === 0 ? '충전 중' : '미충전' },
    { label: '주행 거리', info: `${Math.floor(Math.random() * 201) + 100} km` },
    { label: '배터리 용량', info: `${Math.floor(Math.random() * 21) + 30} kWh` },
    { label: '충전소 거리', info: `${Math.floor(Math.random() * 101) + 50} km` },
    // 추가적인 전기차 관련 dummy data
    { label: '충전 시간', info: `${Math.floor(Math.random() * 6) + 1} 시간` },
    { label: '평균 주행 속도', info: `${Math.floor(Math.random() * 51) + 50} km/h` },
    { label: '배터리 수명', info: `${Math.floor(Math.random() * 501) + 500} 충전` },
    { label: '과거 주행 기록', info: version % 2 === 0 ? '있음' : '없음' },
    // 더 많은 전기차 관련 dummy data 추가 가능
  ];
};

const dummyDataVersions = Array.from({ length: 10 }, (_, index) => generateDummyData(index));

console.log(dummyDataVersions);

const determineBackgroundColor = (label, info) => {
  if (label === '운행상태' && info === '주차 중') {
    return '#FF6347'; // Red
  } else if (label === '운행상태' && info === '운행 중') {
    return '#00FF7F'; // Green
  } else if (label === '배터리 소화기 상태' && info === '이상') {
    return '#FF6347'; // Red
  } else if (label.includes('온도')) {
    const temperature = parseInt(info);
    return temperature > 40 ? '#FF6347' : '#00FF7F';
  } else {
    return '#00FF7F'; // Green
  }
};

const App: React.FC = () => {
  const [currentVersionIndex, setCurrentVersionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVersionIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const currentVersionData = generateDummyData(currentVersionIndex);

  return (
    <div style={containerStyle}>
      <Row gutter={1}>
        {currentVersionData.map((data, index) => (
          <Col key={index} span={2.5}>
            <div style={{ margin: '5px', width: 'max-content' }}>
              <div
                style={{
                  ...style,
                  background: determineBackgroundColor(data.label, data.info),
                  color: determineBackgroundColor(data.label, data.info) === '#FF6347' ? 'white' : '#333',
                }}
              >
                <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{data.label}</div>
                <div>{data.info}</div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default App;
