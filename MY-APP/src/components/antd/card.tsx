import React from 'react';
import { Col, Row } from 'antd';
import MapComponent from '../apis/kakao/map';
const App: React.FC = () => (
  <>
    <Row>
      <Col span={12}>
        <h1>운행지도</h1>
        <MapComponent></MapComponent>
      </Col>
      <Col span={12}>ㅏㅏ</Col>
    </Row>
    <Row>
      <Col span={12}>col-8</Col>
      <Col span={12}>col-8</Col>
    </Row>
  </>
);

export default App;
