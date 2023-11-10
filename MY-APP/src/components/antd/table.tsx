import React from 'react';
import { Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: React.Key;
  busname: string;
  location: string;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: '차량번호',
    dataIndex: 'busname',
    width: 10,
  },
  {
    title: '노선',
    dataIndex: 'location',
    width: 10,
  },
  {
    title: '위치',
    dataIndex: 'address',
    width: 10,
  },
];

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    busname: ` ${i}`,
    location: '화성',
    address: `London, Park Lane no. ${i}`,
  });
}

const App: React.FC = () => (
  <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} scroll={{ y: 600 }} />
);

export default App;