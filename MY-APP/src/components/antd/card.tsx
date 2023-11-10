import React from 'react';
import { Col, Row } from 'antd';
import MapComponent from '../apis/kakao/map';
import Table from './table';
const style: React.CSSProperties = { padding: '8px 0', margin: '20px' };
const App: React.FC = () => (
  <>
    <Row>
      <Col span={12}>
        <h1 style={{ color: 'darkblue' }}>운행지도</h1>
        <MapComponent></MapComponent>
      </Col>
      <Col span={12}>
        <Row gutter={[16, 24]}>
          <Col className="gutter-row" span={10}>
            <div style={style}>보유차량</div>
          </Col>
          <Col className="gutter-row" span={10}>
            <div style={style}>운행차량</div>
          </Col>
        </Row>
        <Row gutter={[16, 24]}>
          <Col className="gutter-row" span={10}>
            <div style={style}>대기차량</div>
          </Col>
          <Col className="gutter-row" span={10}>
            <div style={style}>고장차량</div>
          </Col>
        </Row>
        <h1 style={{ color: 'darkblue' }}>운행중 버스정보</h1>
        <Row>
          <Col span={24}>
            <Table />
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col span={12}>col-8</Col>
    
    </Row>
  </>
);


export default App;

