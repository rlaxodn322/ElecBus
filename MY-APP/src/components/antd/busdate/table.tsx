import React from 'react';
import { DatePicker, Space, Button } from 'antd';

const { RangePicker } = DatePicker;

const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <RangePicker />
    <Button type="primary">검색</Button>
  </Space>
);

export default App;
