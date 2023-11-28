import React from 'react';
import { Col, Row } from 'antd';

const headers = ['버스번호', '차량번호', '위치', '운행상태'];
const data = [
  ['강원71자1565', '90', '차고지', '미운행'],
  ['강원71자1565', '90', '차고지', '미운행'],
  ['강원71자1565', '90', '차고지', '미운행'],
  ['강원71자1565', '90', '차고지', '미운행'],
  ['강원71자1565', '90', '차고지', '미운행'],
];

const renderRow = (items: string[], isHeader = false) => (
  <Row
    justify="space-evenly"
    style={{
      width: '1370px',
      height: '100%',
      display: 'flex',
      margin: '0 auto',
      paddingTop: isHeader ? '20px' : '10px',
      alignItems: 'center',
      marginTop: isHeader ? '20px' : '10px',

      ...(isHeader && { borderBottom: '1px solid black', fontWeight: 'bold' }),
    }}
  >
    {items.map((item, index) => (
      <div key={index} style={{ flex: 1 }}>
        {item}
      </div>
    ))}
  </Row>
);

const App: React.FC = () => (
  <>
    {renderRow(headers, true)}
    {data.map((row, rowIndex) => (
      <div key={`row-${rowIndex}`} style={{ display: 'flex', flex: 1 }}>
        {row.map((item, columnIndex) => (
          <div key={`col-${row[0]}-${columnIndex}`} style={{ flex: 1 }}>
            {item}
          </div>
        ))}
      </div>
    ))}
  </>
);

export default App;
