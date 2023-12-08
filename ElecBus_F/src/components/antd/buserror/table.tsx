import React from 'react';
import { Col, Row, Button } from 'antd';
import * as XLSX from 'xlsx';

const headers = ['날짜', '차량', '에러위치', '에러내용', '비고'];
const data = [
  ['Day1', 'Car1', 'Error1', 'Err1', 'Check1'],
  ['Day2', 'Car2', 'Error2', 'Err2', 'Check2'],
  ['Day3', 'Car3', 'Error3', 'Err3', 'Check3'],
  ['Day4', 'Car4', 'Error4', 'Err4', 'Check4'],
  ['Day5', 'Car5', 'Error5', 'Err5', 'Check5'],
];

const convertToExcel = () => {
  const excelData = [headers, ...data];

  if (XLSX.utils) {
    const ws = XLSX.utils.aoa_to_sheet(excelData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'error_data.xlsx');
  } else {
    console.error("XLSX.utils is undefined. Check if 'xlsx' is properly installed.");
  }
};

const renderRow = (items, isHeader = false, rowIndex) => (
  <Row
    key={isHeader ? 'header' : `row-${rowIndex}`}
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
      <Col key={isHeader ? `header-${index}` : `col-${rowIndex}-${index}`} span={4}>
        {item}
      </Col>
    ))}
  </Row>
);

const ErrorTable: React.FC = () => (
  <>
    {renderRow(headers, true, 0)}
    {data.map((row, index) => renderRow(row, false, index + 1))}
    <div
      key="excelDownload"
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        width: '1370px',
        margin: '0 auto',
        marginTop: '20px',
      }}
    >
      <Button size="large" style={{ boxShadow: '2px 2px 2px 2px lightgrey' }} onClick={convertToExcel}>
        엑셀 다운로드
      </Button>
    </div>
  </>
);

export default ErrorTable;
