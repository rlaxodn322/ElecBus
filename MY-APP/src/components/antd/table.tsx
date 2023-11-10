import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: '차량번호',
    dataIndex: 'busname',
    width: 150,
  },
  {
    title: '노선',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: '위치',
    dataIndex: 'address',
    width: 150,
  },
];

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    busname: ` ${i}`,
    age: '화성',
    address: `London, Park Lane no. ${i}`,
  });
}

const App: React.FC = () => (
  <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} scroll={{ y: 240 }} />
);

export default App;