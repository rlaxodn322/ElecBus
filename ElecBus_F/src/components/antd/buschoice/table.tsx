import React from 'react';
import { Cascader, DatePicker, Space, Button } from 'antd';

interface Option {
  value: string;
  label: string;
  children?: Option[];
}

const busOptions: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
  },
];

const BusAndDatePicker: React.FC = () => {
  const onChange = (value: string[]) => {
    console.log(value);
  };

  // Just show the latest item.
  const displayRender = (labels: string[]) => labels[labels.length - 1];
  const { RangePicker } = DatePicker;
  return (
    <Space direction="vertical" size={12}>
      <Cascader
        options={busOptions}
        expandTrigger="hover"
        displayRender={displayRender}
        onChange={onChange}
        placeholder="버스를 선택하세요."
        key="cascader-key"
      />
      <RangePicker key="range-picker-key" />
      <Button style={{ boxShadow: '2px 2px 2px 2px lightgrey' }} key="search-button-key">
        검색
      </Button>
    </Space>
  );
};

export default BusAndDatePicker;
