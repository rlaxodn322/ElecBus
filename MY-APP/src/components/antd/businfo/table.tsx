import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: React.Key;
  busnumber: string;
  sirialnumber: string;
  delete: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: '버스번호',
    dataIndex: 'busnumber',
    width: 150,
  },
  {
    title: '시리얼넘버',
    dataIndex: 'sirialnumber',
    width: 150,
  },
  {
    title: '삭제',
    dataIndex: 'delete',
    width: 150,
  },
];

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    busnumber: ` 가${i + 100}`,
    sirialnumber: `dasdasdas${i + 100}`,
    delete: `London, Park Lane no. ${i}`,
  });
}

const App: React.FC = () => (
  <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
);

export default App;
