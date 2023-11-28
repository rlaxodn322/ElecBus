import React from 'react';
import { Row, Col } from 'antd';

const style: React.CSSProperties = {
  background: 'white',
  padding: '8px 0',
  width: '100px',
  height: '100px',
  borderRadius: '20px',
  border: '1px solid lightgrey',
  boxShadow: '1px 1px 1px 1px lightgrey',
};

const containerStyle: React.CSSProperties = {
  width: '1370px',
  margin: '0 auto',
  paddingTop: '20px',
};

const App: React.FC = () => (
  <div style={containerStyle}>
    <Row gutter={16}>
      {[...Array(24)].map((_, index) => (
        <Col key={index} span={2}>
          <div style={{ margin: '5px', width: 'max-content' }}>
            <div style={style}>상태정보</div>
          </div>
        </Col>
      ))}
    </Row>
  </div>
);

export default App;
