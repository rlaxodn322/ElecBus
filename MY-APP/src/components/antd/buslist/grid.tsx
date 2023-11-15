import React from 'react';
import { Col, Row } from 'antd';
import Line from '../../../pages/auth/lineimport/index';
import Import from '../../../pages/auth/busimport/index';
import Pagination from '../pagination/table';
const App: React.FC = () => (
  <>
    <Row>
      <Col span={12}>
        <Line />
      </Col>

      <Col span={12}>
        <Import />
      </Col>
    </Row>
  </>
);

export default App;
