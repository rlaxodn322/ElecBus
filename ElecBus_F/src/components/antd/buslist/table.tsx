import React from 'react';
import { Layout, Space, Button, Form, Input, InputNumber } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: 'black',
  backgroundColor: 'white',
  height: '500px',
  width: '400px',
  margin: '0 auto',
};

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
const onFinish = (values: any) => {
  console.log(values);
};
/* eslint-enable no-template-curly-in-string */
const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout>
      <Content style={contentStyle}>
        {' '}
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
          validateMessages={validateMessages}
        >
          <Form.Item name={['user', 'busName']} label="버스이름" rules={[{ required: true }]}>
            <div>
              <Input />
            </div>
          </Form.Item>
          <Form.Item name={['user', 'busNumber']} label="버스번호" rules={[{ required: true }]}>
            <div>
              <Input />
            </div>
          </Form.Item>
          <Form.Item name="buscommit" wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              버스등록
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  </Space>
);

export default App;
