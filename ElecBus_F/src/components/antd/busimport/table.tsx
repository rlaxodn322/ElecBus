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
  const modalFormRef = React.useRef<FormInstance>(null);
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
    modalFormRef.current?.submit();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* 메인 폼 */}
      <Form {...layout} ref={formRef} name="main-form" onFinish={onFinish} style={{ maxWidth: 600 }}>
        <Form.Item key="busRoute" name="busRoute" label="노선" rules={[{ required: true }]}>
          <div style={{ display: 'flex' }}>
            <Input style={{ width: '300px' }} placeholder="노선을 입력하세요." />
            <Button style={{ boxShadow: '2px 2px 2px 2px lightgrey' }} onClick={showModal}>
              노선검색
            </Button>
          </div>
        </Form.Item>

        {/* ... (나머지 메인 폼 아이템) */}

        <Form.Item key="stations" name="stations" style={{ marginTop: '45px' }} {...tailLayout}>
          <div>
            <Button style={{ marginRight: '20px', boxShadow: '2px 2px 2px 2px lightgrey' }} htmlType="submit">
              노선등록
            </Button>
            <Link href="/auth/buslist">
              <Button style={{ boxShadow: '2px 2px 2px 2px lightgrey' }} htmlType="button" onClick={onReset}>
                취소
              </Button>
            </Link>
          </div>
        </Form.Item>
      </Form>

      {/* 모달 폼 */}
      <Modal title="노선 검색" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form ref={modalFormRef} name="modal-form" {...layout}>
          <Form.Item key="stationsNumber" name="stationsNumber" label="차량번호" rules={[{ required: true }]}>
            <Select style={{ width: '300px' }} placeholder="도시를 선택해주세요." allowClear>
              {city.map((c) => (
                <Option key={c} value={c}>
                  {c}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item key="busRouteSearch" name="busRouteSearch" label="노선" rules={[{ required: true }]}>
            <Input style={{ width: '300px' }} placeholder="노선을 입력하세요." />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default App;
