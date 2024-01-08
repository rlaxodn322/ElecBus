import React from 'react';
import { Button, Form, Input, Select } from 'antd';
import type { FormInstance } from 'antd/es/form';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const inputStyle = { width: '300px' };
const buttonStyle = { marginRight: '20px', boxShadow: '2px 2px 2px 2px lightgrey' };

const App: React.FC = () => {
  const formRef = React.useRef<FormInstance>(null);
  const router = useRouter();

  const onFinish = async (values: any) => {
    try {
      // API 호출하여 데이터베이스에 저장
      await axios.post('/bus/register', {
        busNumber: values.busNumber,
        serial: values.serial,
      });

      // 차량번호와 시리얼넘버를 각각의 div에 넣어줍니다.
      const carNumDiv = document.querySelector('.carnum');
      const serialNumDiv = document.querySelector('.serialnum');

      if (carNumDiv) {
        carNumDiv.innerText = `차량번호: ${values.busNumber}`;
      }

      if (serialNumDiv) {
        serialNumDiv.innerText = `시리얼넘버: ${values.serial}`;
      }

      console.log('데이터베이스에 저장 및 화면 업데이트 완료');
    } catch (error) {
      console.error('데이터베이스 저장 중 오류:', error);
    }
  };

  const onReset = () => {
    formRef.current?.resetFields();
  };

  return (
    <>
      <Form {...layout} ref={formRef} name="control-ref" onFinish={onFinish} style={{ maxWidth: 600 }}>
        <Form.Item name="busNumber" label="차량번호" rules={[{ required: true }]}>
          <Input style={inputStyle} placeholder="노선을 입력하세요." />
          
        </Form.Item>
        <Form.Item name="serial" label="시리얼넘버" rules={[{ required: true }]}>
          <Input style={inputStyle} placeholder="시리얼넘버를 입력하세요." />
        </Form.Item>

        <Form.Item name="busCommit" style={{ marginTop: '45px', ...tailLayout, marginLeft: '100px' }}>
          <div>
            <Button style={{ ...buttonStyle }} htmlType="submit">
              버스등록
            </Button>
            <Link href="/auth/busdelete">
              <Button style={{ ...buttonStyle, marginRight: '20px' }}>버스삭제</Button>
            </Link>
            <Link href="/auth/buslist">
              <Button style={buttonStyle} htmlType="button" onClick={onReset}>
                취소
              </Button>
            </Link>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};

export default App;
