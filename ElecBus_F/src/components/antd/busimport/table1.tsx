import React from 'react';
import { Button, Form, Input, Select } from 'antd';
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

  return (
    <>
      <Form {...layout} ref={formRef} name="control-ref" onFinish={onFinish} style={{ maxWidth: 600 }}>
        <Form.Item name="bus number" label="차량번호" rules={[{ required: true }]}>
          <Input style={{ width: '300px' }} placeholder="노선을 입력하세요." />
        </Form.Item>
        <Form.Item name="sirial" label="시리얼넘버" rules={[{ required: true }]}>
          <Input style={{ width: '300px' }} placeholder="시리얼넘버를 입력하세요." />
        </Form.Item>

        <Form.Item style={{ marginTop: '100px' }} {...tailLayout}>
          <Button style={{ marginRight: '20px', boxShadow: '2px 2px 2px 2px lightgrey' }} htmlType="submit">
            버스등록
          </Button>
          <Link href="/auth/busdelete">
            <Button style={{ boxShadow: '2px 2px 2px 2px lightgrey', marginRight: '20px' }}>버스삭제</Button>
          </Link>
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
