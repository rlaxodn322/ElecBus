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
        <Form.Item name="bus" label="노선" rules={[{ required: true }]}>
          <Input style={{ width: '300px' }} placeholder="노선을 입력하세요." />
        </Form.Item>
        <Form.Item name="busnumber" label="차량번호" rules={[{ required: true }]}>
          <Select style={{ width: '300px' }} placeholder="차량번호를 입력하세요." allowClear>
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Form.Item name="bus" label="버스차종" rules={[{ required: true }]}>
          <Select style={{ width: '300px', margintop: '30px' }} placeholder="버스차종을 입력하세요." allowClear>
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>

        <Form.Item style={{ marginTop: '200px', marginLeft: '100px' }} {...tailLayout}>
          <Button style={{ marginRight: '20px', boxShadow: '2px 2px 2px 2px grey' }} type="primary" htmlType="submit">
            노선등록
          </Button>
          <Link href="../">
            <Button style={{ boxShadow: '2px 2px 2px 2px grey' }} htmlType="button" onClick={onReset}>
              취소
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </>
  );
};

export default App;
