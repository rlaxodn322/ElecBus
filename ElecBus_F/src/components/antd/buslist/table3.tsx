import React from 'react';
import { Button } from 'antd';
import * as XLSX from 'xlsx';

const headers = ['버스번호', '차량번호', '위치', '운행상태'];

const generateDummyData = (numRows) => {
  const dummyData = [];
  for (let i = 1; i <= numRows; i++) {
    const row = [`강원${i}자1565`, `${i * 10}`, '차고지', Math.random() < 0.5 ? '운행 중' : '미운행'];
    dummyData.push(row);
  }
  return dummyData;
};

const busDummyData = generateDummyData(10);

const convertToExcel = () => {
  const excelData = [headers, ...busDummyData];

  if (XLSX.utils) {
    const ws = XLSX.utils.aoa_to_sheet(excelData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'bus_data.xlsx');
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
        border: '1px solid #e8e8e8',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
      }}
    >
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ddd', backgroundColor: '#64adf1', color: 'white' }}>
            {headers.map((header, index) => (
              <th key={`header-${index}`} style={{ padding: '12px', textAlign: 'center', border: '1px solid #ddd' }}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {busDummyData.map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`} style={{ borderBottom: '1px solid #ddd' }}>
              {row.map((item, colIndex) => (
                <td
                  key={`col-${rowIndex}-${colIndex}`}
                  style={{
                    padding: '12px',
                    textAlign: 'center',
                    border: '1px solid #ddd',
                    backgroundColor: rowIndex % 2 === 0 ? '#f5f5f5' : 'white', // Alternate row colors
                  }}
                >
                  {item}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button
        size="large"
        style={{
          boxShadow: '2px 2px 2px 2px #d9d9d9',
          backgroundColor: '#52c41a', // Green color
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
