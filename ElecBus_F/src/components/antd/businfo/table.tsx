import React from 'react';
import { Row, Col } from 'antd';

const style: React.CSSProperties = {
  background: 'white',
  padding: '8px 0',
  width: '150px',
  height: '150px',
  borderRadius: '20px',
  border: '1px solid lightgrey',
  boxShadow: '1px 1px 1px 1px lightgrey',
};

const containerStyle: React.CSSProperties = {
  width: '1370px',
  margin: '0 auto',
  paddingTop: '20px',
};

const dummyData = [
  '운행상태',
  '모터온도',
  '모터제어기온도',
  '에어펌프',
  '배터리SOC',
  '배터리최고온도',
  '배터리 최저온도',
  '배터리팩 충전상태',
  '배터리팩 상세온도',
  '배터리 소화기 상태',
  'Low RPM',
  'High RPM',
];

const App: React.FC = () => (
  <div style={containerStyle}>
    <Row gutter={1}>
      {dummyData.map((data, index) => (
        <Col key={index} span={4}>
          <div style={{ margin: '5px', width: 'max-content' }}>
            <div style={style}>{data}</div>
          </div>
        </Col>
      ))}
    </Row>
  </div>
);

export default App;
