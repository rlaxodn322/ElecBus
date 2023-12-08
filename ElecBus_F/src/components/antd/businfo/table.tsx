import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { Button, Input } from 'antd';

const style: React.CSSProperties = {
  padding: '8px 0',
  width: '160px',
  height: '80px',
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
    { label: '충전 시간', info: `${Math.floor(Math.random() * 6) + 1} 시간` },
  ];
};

const determineBackgroundColor = (label, info) => {
  let backgroundColor = 'transparent';

  if (info) {
    if (label === '운행상태' && info === '주차 중') {
      backgroundColor = '#FF6347'; // Red
    } else if (label === '운행상태' && info === '운행 중') {
      backgroundColor = '#00FF7F'; // Green
    } else if (label === '배터리 소화기 상태' && info === '이상') {
      backgroundColor = '#FF6347'; // Red
    } else if (label.includes('온도')) {
      const temperature = parseInt(info);
      backgroundColor = temperature > 40 ? '#FF6347' : '#00FF7F';
    } else if (label === '충전 상태' && info === '충전 중') {
      backgroundColor = '#00FF7F'; // Green
    } else if (label === '주행 거리') {
      const distance = parseInt(info.split(' ')[0]); // '100 km'에서 숫자 값 추출
      backgroundColor = distance < 100 ? '#FF6347' : '#00FF7F';
    } else {
      backgroundColor = '#00FF7F'; // Green
    }
  }

  return backgroundColor;
};

const App: React.FC = () => {
  const [currentVersionIndex, setCurrentVersionIndex] = useState('');
  const [enteredVersion, setEnteredVersion] = useState('');
  const [currentVersionData, setCurrentVersionData] = useState([]);

  useEffect(() => {
    // 서버에서만 실행되도록 체크
    if (typeof window === 'undefined') {
      // 1초마다 업데이트
      const intervalId = setInterval(() => {
        setCurrentVersionData(generateDummyData(currentVersionIndex));
      }, 10);

      // 컴포넌트가 언마운트될 때 clearInterval을 통해 인터벌 제거
      return () => clearInterval(intervalId);
    }
  }, [currentVersionIndex]);

  const handleSearch = () => {
    const enteredIndex = parseInt(enteredVersion) - 1;
    if (!isNaN(enteredIndex) && enteredIndex >= 0 && enteredIndex <= 9) {
      setCurrentVersionIndex(enteredIndex);
      setCurrentVersionData(generateDummyData(enteredIndex));
    } else {
      alert(`${enteredVersion}호기는 없습니다.`);
    }
  };

  return (
    <div style={containerStyle}>
      <Input
        placeholder="Basic usage"
        type="text"
        placeholder="호기를 입력하세요"
        value={enteredVersion}
        onChange={(e) => setEnteredVersion(e.target.value)}
        style={{ width: '200px' }}
      />

      <Button onClick={handleSearch} type="primary">
        검색
      </Button>

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
                {data.info && <div>{data.info}</div>}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default App;
