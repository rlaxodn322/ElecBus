import React from 'react';
import { Button } from 'antd';
import * as XLSX from 'xlsx';

const headers = ['날짜', '차량', '에러위치', '에러내용', '비고'];

// Generating dummy data for the table
const generateDummyData = (numRows) => {
  const dummyData = [];
  for (let i = 1; i <= numRows; i++) {
    const row = [
      `2023-12-0${i}`, // Date format might vary based on your requirements
      `${i}호기`,
      `배터리${i}`,
      `배터리부족${i}`,
      '',
    ];
    dummyData.push(row);
  }
  return dummyData;
};

const data = generateDummyData(15);

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

const ErrorTable: React.FC = () => (
  <>
    <div
      style={{
        height: '300px',
        overflowY: 'auto',
        border: '1px solid lightgrey',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2', fontWeight: 'bold' }}>
            {headers.map((header, index) => (
              <th key={`header-${index}`} style={{ padding: '12px', textAlign: 'center', border: '1px solid #ddd' }}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`} style={{ borderBottom: '1px solid #ddd' }}>
              {row.map((item, colIndex) => (
                <td
                  key={`col-${rowIndex}-${colIndex}`}
                  style={{ padding: '12px', textAlign: 'center', border: '1px solid #ddd' }}
                >
                  {item}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
      <Button
        size="large"
        style={{
          boxShadow: '2px 2px 2px 2px lightgrey',
          backgroundColor: '#1890ff',
          color: 'white',
          border: 'none',
        }}
        onClick={convertToExcel}
      >
        엑셀 다운로드
      </Button>
    </div>
  </>
);

export default ErrorTable;
