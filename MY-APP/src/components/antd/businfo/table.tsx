import React from 'react';
import { Col } from 'antd';

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
  display: 'flex',
  alignItems: 'center',
  margin: '0 auto',
  paddingTop: '20px',
};

const App: React.FC = () => (
  <>
    <div style={containerStyle}>
      {[...Array(12)].map((_, index) => (
        <div key={index} style={{ margin: '0 10px' }}>
          <Col>
            <div style={style}></div>
          </Col>
        </div>
      ))}
    </div>
  </>
);

export default App;
