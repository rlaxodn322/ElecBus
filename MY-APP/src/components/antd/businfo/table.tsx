import React from 'react';
import { Col, Row } from 'antd';

const style: React.CSSProperties = {
  background: 'white',
  padding: '8px 0',
  width: '100px',
  height: '100px',
  borderRadius: '20px',
  border: '1px solid lightgrey',
  boxShadow: '1px 1px 1px 1px lightgrey',
};

const App: React.FC = () => (
  <>
    <div
      style={{
        width: '1370px',
        display: 'flex',
        alignItems: 'center',
        margin: '0 auto',
        paddingTop: '20px',
      }}
    >
      {[...Array(12)].map((_, index) => (
        <Col wrap="wrap" key={index} className="gutter-row" span={2}>
          <div style={style}></div>
        </Col>
      ))}
    </div>
  </>
);

export default App;
