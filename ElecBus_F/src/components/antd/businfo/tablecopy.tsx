import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Input, Flex, Spin } from 'antd';

import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';

const style: React.CSSProperties = {
  padding: '8px 0',
  width: '115px',
  height: '70px',
  borderRadius: '10px',
  borderBottom: '1px  solid lightgrey',
  borderRight: '1px  solid lightgrey',
  borderLeft: '1px  solid lightgrey',
  boxShadow: '1px 1px 1px 1px lightgrey',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  fontSize: '11px',
};
const style1: React.CSSProperties = {
  paddingTop: '25%',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',

  alignItems: 'center',
  textAlign: 'center',
  fontSize: '30px',
};
const style2: React.CSSProperties = {
  padding: '8px 0',
  width: '160px',
  height: '50px',
  borderRadius: '10px',
  border: '1px solid lightgrey',
  boxShadow: '1px 1px 1px 1px lightgrey',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  fontSize: '11px',
};
const containerStyle: React.CSSProperties = {
  background: 'white',
  width: '1370px',
  margin: '0 auto',
  paddingTop: '20px',
  boxShadow: '0px 0px 0px 0px',
  border: '1px solid lightgrey',
  borderRadius: '10px',
  paddingLeft: '20px',
  paddingBottom: '20px',
};
const hoverStyle: React.CSSProperties = {
  transform: 'scale(1.1)',
  transition: 'transform 0.5s ease',
  // 여기에 hover 시에 변경되어야 할 스타일을 추가하세요.
};

const generateDummyData = () => {
  const dummyData = [
    { label: '온도1', info: `0°C` },
    { label: '온도2', info: `0°C` },
    { label: '가스1', info: `0%LEL` },
    { label: '가스2', info: `0%LEL` },
    { label: '환풍기', info: `OFF ` },
    { label: '압력1', info: `0 kPa` },
    { label: '압력2', info: `0 kPa` },
    { label: '소화수입력밸브', info: `OFF` },
    { label: '드레인밸브', info: `OFF` },
    { label: '수위 LOW', info: `OFF` },
    { label: '수위 HIGH', info: `OFF` },
  ];

  return dummyData;
};
const App: React.FC = () => {
  const router = useRouter();
  const { busNumber } = router.query;
  const [selectedVersion, setSelectedVersion] = useState(0);
  const [mqttData, setMqttData] = useState([]);
  const [hoverStates, setHoverStates] = useState([]);
  const [blink, setBlink] = useState(false);
  const [dummyData, setDummyData] = useState(generateDummyData());
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data...'); // 추가한 부분
        const response = await axios.get('http://localhost:3000/mqtt/getdata');
        const data = response.data;

        // 마지막 데이터를 선택합니다.
        const lastData = data[data.length - 1];
        console.log('Last Data:', lastData);
        // 새 데이터가 있는 경우에만 상태를 설정합니다.
        const dummyData = generateDummyData();
        setDummyData(dummyData);
        if (JSON.stringify(lastData) !== JSON.stringify(mqttData)) {
          setBlink(true);
          setMqttData(lastData);

          // 만약 버스 번호가 있다면 해당 버스 데이터로 설정
          if (busNumber) {
            setSelectedVersion(Number(busNumber) - 1);
          }
          setHoverStates(Array(lastData.data.length).fill(false));
        }
      } catch (error) {
        console.error('MQTT 데이터를 불러오는 중 에러 발생:', error);
      }
    };

    fetchData();

    // Set up interval to fetch data every 5 seconds
    const intervalId = setInterval(fetchData, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [busNumber, mqttData]);
  // 깜빡거리는 효과가 적용된지 일정 시간 후에 비활성화
  useEffect(() => {
    const blinkTimeout = setTimeout(() => {
      setBlink(false);
    }, 100);

    return () => clearTimeout(blinkTimeout);
  }, [blink]);
  // 이제 generateDummyData1 함수 대신에 실제 서버에서 받아온 데이터를 사용합니다.
  const sohaData = mqttData?.data || [];
  return (
    <>
      <div style={containerStyle}>
        <div style={{ width: '1370px', display: 'flex', justifyContent: 'space-between' }}>
          <div
            style={{
              width: '60%',
            }}
          >
            <h1> {selectedVersion + 1}호기 상태정보</h1>
            <Row gutter={1}>
              {sohaData && sohaData.length > 0 ? (
                sohaData.map((data, index) => (
                  <Col
                    key={index}
                    span={7.8}
                    onMouseEnter={() => setHoverStates((prev) => prev.map((state, i) => (i === index ? true : state)))}
                    onMouseLeave={() => setHoverStates((prev) => prev.map((state, i) => (i === index ? false : state)))}
                  >
                    <div style={{ margin: '5px', width: 'max-content' }}>
                      <div
                        style={{
                          ...style,
                          ...(hoverStates[index] && hoverStyle),
                        }}
                      >
                        <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{data.label}</div>
                        {data.info && <div style={{ color: blink ? 'white' : 'black' }}>{data.info}</div>}
                      </div>
                    </div>
                  </Col>
                ))
              ) : (
                <div style={{ ...style1 }}>
                  <Flex align="center" gap="middle">
                    <Spin size="large" />
                  </Flex>
                </div>
              )}
            </Row>
          </div>

          <div
            style={{
              width: '40%',
            }}
          >
            <h1> 화재 방지 시스템</h1>
            <Row className="soha">
              {dummyData && dummyData.length > 0 ? (
                dummyData.map((data, index) => (
                  <Col key={index} span={6.5}>
                    <div style={{ margin: '5px', width: 'max-content' }}>
                      <div
                        style={{
                          ...style2,
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
                  src={'/images/bus.jpg'}
                  style={{ width: '450px', height: '280px', marginTop: '20px' }}
                  alt="soha-image"
                />
              </Col>
            </Row>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'end', marginRight: '20px' }}>
          <Link href="/">
            <Button style={{ boxShadow: '1px 1px 1px 1px' }}>이전</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default App;
