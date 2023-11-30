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

  const bus = ['가', '나', '다'];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    try {
      const values = await modalFormRef.current?.validateFields();
      formRef.current?.setFieldsValue({
        busRouteMain: values.busRouteSearch,
        busNumberMain: values.stationsNumber,
        // 다른 필드에 대한 설정도 필요하다면 여기에 추가
      });
      console.log(values.busRouteMain);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Validation failed:', error);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* 메인 폼 */}
      <Form {...layout} ref={formRef} name="main-form" onFinish={onFinish} style={{ maxWidth: 600 }}>
        <Form.Item key="busRouteMain" name="busRouteMain" label="노선" rules={[{ required: true }]}>
          <div style={{ display: 'flex' }}>
            <Input style={{ width: '300px' }} placeholder="노선을 입력하세요." />
          </div>
        </Form.Item>
        <Form.Item key="busNumberMain" name="busNumberMain" label="차량번호" rules={[{ required: true }]}>
          <div style={{ display: 'flex' }}>
            <Input style={{ width: '300px' }} placeholder="차량번호를 입력하세요." />
          </div>
        </Form.Item>

        {/* ... (나머지 메인 폼 아이템) */}

        <Form.Item key="stations" name="stations" style={{ marginTop: '45px' }} {...tailLayout}>
          <div>
            <Button
              onClick={showModal}
              style={{ marginRight: '20px', boxShadow: '2px 2px 2px 2px lightgrey' }}
              htmlType="submit"
            >
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
      <Modal title="등록 " open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form ref={modalFormRef} name="modal-form" {...layout}>
          등록하시겠습니까?
        </Form>
      </Modal>
    </>
  );
};

export default App;
