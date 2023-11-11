import React from 'react';
import { Col, Divider, Row } from 'antd';

const style: React.CSSProperties = {
  background: 'white',
  padding: '8px 0',
  border: '1px solid black',
  borderRadius: '5px',
};

const App: React.FC = () => (
  <>
    <Divider orientation="left">
      <h1 style={{ fontSize: '40px' }}>버스관리</h1>
    </Divider>
    <Row gutter={[20, 24]}>
      <Col className="gutter-row" span={3}>
        <div style={style}>고장정보</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>고장정보</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>고장정보</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>고장정보</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>고장정보</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>고장정보</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>고장정보</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>고장정보</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>고장정보</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>고장정보</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>고장정보</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>고장정보</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>고장정보</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>고장정보</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>고장정보</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>고장정보</div>
      </Col>
    </Row>
  </>
);

export default App;
