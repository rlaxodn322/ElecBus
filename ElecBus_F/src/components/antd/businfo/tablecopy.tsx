import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { Button, Input } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
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

const generateDummyData = (version) => {
  // 고정된 더미 데이터
  const fixedDummyData = [
    [
      { label: '운행상태', info: '운행 중' },
      { label: '모터온도', info: '25°C' },
      { label: '모터제어기온도', info: '30°C' },
      { label: '에어펌프', info: '작동 중' },
      { label: '배터리SOC', info: '80%' },
      { label: '배터리최고온도', info: '35°C' },
      { label: '배터리 최저온도', info: '20°C' },
      { label: '배터리팩 충전상태', info: '충전 중' },
      { label: '배터리팩 상세온도', info: '28°C' },
      { label: '배터리 소화기 상태', info: '정상' },
      { label: 'Low RPM', info: '1200' },
      { label: 'High RPM', info: '1800' },
      { label: '충전 상태', info: '미충전' },
      { label: '주행 거리', info: '150 km' },
      { label: '배터리 용량', info: '40 kWh' },
      { label: '충전 시간', info: '3 시간' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
    ],
    [
      { label: '운행상태', info: '운행 중2' },
      { label: '모터온도', info: '27°C' },
      { label: '모터제어기온도', info: '32°C' },
      { label: '에어펌프', info: '작동 중' },
      { label: '배터리SOC', info: '75%' },
      { label: '배터리최고온도', info: '38°C' },
      { label: '배터리 최저온도', info: '18°C' },
      { label: '배터리팩 충전상태', info: '충전 중' },
      { label: '배터리팩 상세온도', info: '30°C' },
      { label: '배터리 소화기 상태', info: '정상' },
      { label: 'Low RPM', info: '1100' },
      { label: 'High RPM', info: '1700' },
      { label: '충전 상태', info: '미충전' },
      { label: '주행 거리', info: '120 km' },
      { label: '배터리 용량', info: '35 kWh' },
      { label: '충전 시간', info: '2.8 시간' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
    ],
    [
      { label: '운행상태', info: '주차 중' },
      { label: '모터온도', info: '20°C' },
      { label: '모터제어기온도', info: '25°C' },
      { label: '에어펌프', info: '정지' },
      { label: '배터리SOC', info: '50%' },
      { label: '배터리최고온도', info: '28°C' },
      { label: '배터리 최저온도', info: '12°C' },
      { label: '배터리팩 충전상태', info: '미충전' },
      { label: '배터리팩 상세온도', info: '22°C' },
      { label: '배터리 소화기 상태', info: '이상' },
      { label: 'Low RPM', info: '950' },
      { label: 'High RPM', info: '1500' },
      { label: '충전 상태', info: '충전 중' },
      { label: '주행 거리', info: '70 km' },
      { label: '배터리 용량', info: '28 kWh' },
      { label: '충전 시간', info: '2.2 시간' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
    ],
    [
      { label: '운행상태', info: '운행 중3' },
      { label: '모터온도', info: '30°C' },
      { label: '모터제어기온도', info: '35°C' },
      { label: '에어펌프', info: '작동 중' },
      { label: '배터리SOC', info: '85%' },
      { label: '배터리최고온도', info: '40°C' },
      { label: '배터리 최저온도', info: '22°C' },
      { label: '배터리팩 충전상태', info: '충전 중' },
      { label: '배터리팩 상세온도', info: '32°C' },
      { label: '배터리 소화기 상태', info: '정상' },
      { label: 'Low RPM', info: '1200' },
      { label: 'High RPM', info: '1800' },
      { label: '충전 상태', info: '미충전' },
      { label: '주행 거리', info: '160 km' },
      { label: '배터리 용량', info: '42 kWh' },
      { label: '충전 시간', info: '3.2 시간' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
    ],
    [
      { label: '운행상태', info: '주차 중' },
      { label: '모터온도', info: '18°C' },
      { label: '모터제어기온도', info: '22°C' },
      { label: '에어펌프', info: '정지' },
      { label: '배터리SOC', info: '40%' },
      { label: '배터리최고온도', info: '25°C' },
      { label: '배터리 최저온도', info: '10°C' },
      { label: '배터리팩 충전상태', info: '미충전' },
      { label: '배터리팩 상세온도', info: '20°C' },
      { label: '배터리 소화기 상태', info: '이상' },
      { label: 'Low RPM', info: '900' },
      { label: 'High RPM', info: '1400' },
      { label: '충전 상태', info: '충전 중' },
      { label: '주행 거리', info: '60 km' },
      { label: '배터리 용량', info: '25 kWh' },
      { label: '충전 시간', info: '2 시간' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
      { label: 'Tray', info: '' },
    ],
  ];

  return fixedDummyData[version];
};

const generateDummyData1 = () => {
  // 고정된 더미 데이터
  const fixedDummyData1 = [
    [
      { label: '온도1', info: '0˚C' },
      { label: '온도2', info: '0˚C' },
      { label: '가스1', info: '0%LEL' },
      { label: '가스2', info: '0%LEL' },
      { label: '환풍기', info: 'OFF' },
      { label: '압력1', info: '0 Bar' },
      { label: '압력2', info: '0 Bar' },
      { label: '소화수 입력밸브', info: 'OFF' },
      { label: '드레인 밸브', info: 'OFF' },
      { label: '수위Low', info: 'OFF' },
      { label: '배터리 소화기 상태', info: 'OFF' },
    ],
  ];

  const result = fixedDummyData1;

  return result;
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

  useEffect(() => {
    if (busNumber) {
      setSelectedVersion(Number(busNumber) - 1);
    }
  }, [busNumber]);

  const handleButtonClick = (version) => {
    setSelectedVersion(version);
    router.push(`/auth/businfocopy?busNumber=${version + 1}`);
  };

  const currentVersionData = generateDummyData(selectedVersion);
  const sohaData = generateDummyData1(selectedVersion); // 기존 코드
  console.log(sohaData);
  console.log(currentVersionData);
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
              {/* sohaData의 첫 번째 배열만 사용 */}
              {sohaData[0].map((data, index) => (
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
              ))}
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
