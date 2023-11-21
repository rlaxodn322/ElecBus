import React from 'react';
import { Col, Row } from 'antd';
import Line from '../../../pages/auth/lineimport/index';
import Import from '../../../pages/auth/busimport/index';
const style: React.CSSProperties = {
  marginTop: '100px',
};
const App: React.FC = () => (
  <>
    <Row style={style}>
      <Col span={12}>
        <h1>노선 등록</h1>
        <Line />
      </Col>

      <Col span={12}>
        <h1>버스 등록</h1>
        <Import />
      </Col>
    </Row>
  </>
);

export default App;
