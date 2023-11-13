import React from 'react';
import { Col, Row } from 'antd';

const style: React.CSSProperties = {
  background: 'white',
  padding: '8px 0',
  width: '100px',
  height: '100px',
  borderRadius: '20px',
  border: '1px solid black',
};

const App: React.FC = () => (
  <>
    <Col className="gutter-row" span={2}>
      <div style={style}>고장정보</div>
    </Col>
    <Col className="gutter-row" span={2}>
      <div style={style}>고장정보</div>
    </Col>
    <Col className="gutter-row" span={2}>
      <div style={style}>고장정보</div>
    </Col>
    <Col className="gutter-row" span={2}>
      <div style={style}>고장정보</div>
    </Col>
    <Col className="gutter-row" span={2}>
      <div style={style}>고장정보</div>
    </Col>
    <Col className="gutter-row" span={2}>
      <div style={style}>고장정보</div>
    </Col>
    <Col className="gutter-row" span={2}>
      <div style={style}>고장정보</div>
    </Col>
    <Col className="gutter-row" span={2}>
      <div style={style}>고장정보</div>
    </Col>
    <Col className="gutter-row" span={2}>
      <div style={style}>고장정보</div>
    </Col>
    <Col className="gutter-row" span={2}>
      <div style={style}>고장정보</div>
    </Col>
    <Col className="gutter-row" span={2}>
      <div style={style}>고장정보</div>
    </Col>
    <Col className="gutter-row" span={2}>
      <div style={style}>고장정보</div>
    </Col>
  </>
);

export default App;
