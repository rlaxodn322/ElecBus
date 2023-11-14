import React from 'react';
import { Col, Row, Button } from 'antd';

const headers = ['날짜', '차량', '에러위치', '에러내용', '비고'];
const data = [
  ['Day1', 'Car1', 'Error1', 'Err1', 'Check1'],
  ['Day2', 'Car2', 'Error2', 'Err2', 'Check2'],
  ['Day3', 'Car3', 'Error3', 'Err3', 'Check3'],
];

const renderRow = (items, isHeader = false) => (
  <Row
    justify="space-evenly"
    style={{
      width: '1370px',
      display: 'flex',
      margin: '0 auto',
      paddingTop: isHeader ? '20px' : '10px',
      alignItems: 'center',
      marginTop: isHeader ? '20px' : '10px',
      ...(isHeader && { borderBottom: '1px solid black', fontWeight: 'bold' }),
    }}
  >
    {items.map((item, index) => (
      <Col key={index} span={4}>
        {item}
      </Col>
    ))}
  </Row>
);

const App: React.FC = () => (
  <>
    {renderRow(headers, true)}
    {data.map((row, index) => renderRow(row))}
  </>
);

export default App;
