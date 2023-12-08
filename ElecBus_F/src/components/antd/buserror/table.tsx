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
      `Car-${i}`,
      `Error Location ${i}`,
      `Error Description ${i}`,
      `Note ${i}`,
    ];
    dummyData.push(row);
  }
  return dummyData;
};

const data = generateDummyData(15); // You can change the number of rows here

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
      }}
    >
      <table style={{ width: '100%' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid black', fontWeight: 'bold' }}>
            {headers.map((header, index) => (
              <th key={`header-${index}`} style={{ padding: '10px', textAlign: 'center' }}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`}>
              {row.map((item, colIndex) => (
                <td key={`col-${rowIndex}-${colIndex}`} style={{ padding: '10px', textAlign: 'center' }}>
                  {item}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
      <Button size="large" style={{ boxShadow: '2px 2px 2px 2px lightgrey' }} onClick={convertToExcel}>
        엑셀 다운로드
      </Button>
    </div>
  </>
);

export default ErrorTable;
