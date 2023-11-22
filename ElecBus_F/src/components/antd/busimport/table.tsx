import React, { useState } from 'react';
import { Button, Form, Input, Select, Modal } from 'antd';
import type { FormInstance } from 'antd/es/form';
import { useRouter } from 'next/router';
import Link from 'next/link';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const App: React.FC = () => {
  const formRef = React.useRef<FormInstance>(null);
  const router = useRouter();

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    formRef.current?.resetFields();
  };
  const arr2 = ['강원71자1565', '경기71자1565', '충청71자1565'];
  const arr = ['노란버스', '파란버스', '초록버스'];
  const city = ['원주', '충주', '강원'];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Form {...layout} ref={formRef} name="control-ref" onFinish={onFinish} style={{ maxWidth: 600 }}>
        <Form.Item name="busRoute" label="노선" rules={[{ required: true }]}>
          <Input style={{ width: '300px' }} placeholder="노선을 입력하세요." />
          <Button style={{ boxShadow: '2px 2px 2px 2px lightgrey' }} onClick={showModal}>
            노선검색
          </Button>
        </Form.Item>
        <Modal title="노선 검색" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Form.Item name="stationsNumber" label="차량번호" rules={[{ required: true }]}>
            <Select style={{ width: '300px' }} placeholder="도시를 선택해주세요." allowClear>
              <Option value="male">{city[0]}</Option>
              <Option value="female">{city[1]}</Option>
              <Option value="other">{city[2]}</Option>
            </Select>
          </Form.Item>
          <Form.Item name="busRouteSearch" label="노선" rules={[{ required: true }]}>
            <Input style={{ width: '300px' }} placeholder="노선을 입력하세요." />
          </Form.Item>
        </Modal>

        <Form.Item name="busNumber" label="차량번호" rules={[{ required: true }]}>
          <Select style={{ width: '300px' }} placeholder="차량번호를 입력하세요." allowClear>
            <Option value="male">{arr2[0]}</Option>
            <Option value="female">{arr2[1]}</Option>
            <Option value="other">{arr2[2]}</Option>
          </Select>
        </Form.Item>
        <Form.Item name="busType" label="버스차종" rules={[{ required: true }]}>
          <Select style={{ width: '300px' }} placeholder="버스차종을 입력하세요." allowClear>
            <Option value="male">{arr[0]}</Option>
            <Option value="female">{arr[1]}</Option>
            <Option value="other">{arr[2]}</Option>
          </Select>
        </Form.Item>

        <Form.Item name="stations" style={{ marginTop: '45px' }} {...tailLayout}>
          <Button style={{ marginRight: '20px', boxShadow: '2px 2px 2px 2px lightgrey' }} htmlType="submit">
            노선등록
          </Button>

          <Link href="/auth/buslist">
            <Button style={{ boxShadow: '2px 2px 2px 2px lightgrey' }} htmlType="button" onClick={onReset}>
              취소
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </>
  );
};

export default App;
