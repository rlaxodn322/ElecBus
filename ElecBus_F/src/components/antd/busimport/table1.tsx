import React, { useState } from 'react';
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
  const [busNumber, setBusNumber] = useState('');
  const [serial, setSerial] = useState('');

  const onFinish = async (values: any) => {
    try {
      const { busNumber, serial } = values;

      // API 호출하여 데이터베이스에 저장
      await axios.post('/bus/register', {
        busNumber,
        serial,
      });

      // 상태 업데이트
      setBusNumber(busNumber);
      setSerial(serial);

      // 상태 업데이트 후 콘솔에 로그 찍기
      console.log('데이터베이스에 저장 및 화면 업데이트 완료');
      console.log('현재 busNumber:', busNumber);
      console.log('현재 serial:', serial);
    } catch (error) {
      console.error('데이터베이스 저장 중 오류:', error);
    }
  };

  const onReset = () => {
    formRef.current?.resetFields();
    setBusNumber('');
    setSerial('');
  };

  return (
    <>
      {/* Form 컴포넌트 시작 */}
      <Form {...layout} ref={formRef} name="control-ref" onFinish={onFinish} style={{ maxWidth: 600 }}>
        {/* 차량번호 입력 필드 */}
        <Form.Item name="busNumber" label="차량번호" rules={[{ required: true }]}>
          <Input style={inputStyle} placeholder="노선을 입력하세요." onChange={(e) => setBusNumber(e.target.value)} />
        </Form.Item>

        {/* 시리얼넘버 입력 필드 */}
        <Form.Item name="serial" label="시리얼넘버" rules={[{ required: true }]}>
          <Input
            style={inputStyle}
            placeholder="시리얼넘버를 입력하세요."
            onChange={(e) => setSerial(e.target.value)}
          />
        </Form.Item>

        {/* 버스등록, 버스삭제, 취소 버튼 */}
        <Form.Item name="busCommit" style={{ marginTop: '45px', ...tailLayout, marginLeft: '100px' }}>
          <div>
            {/* 버스등록 버튼 */}
            <Button style={{ ...buttonStyle }} htmlType="submit">
              버스등록
            </Button>

            <Button style={{ ...buttonStyle, marginRight: '20px' }} onClick={() => router.push('/auth/busdelete')}>
              버스삭제
            </Button>

            {/* 취소 버튼 */}
            <Link href="/auth/buslist">
              <Button style={buttonStyle} htmlType="button" onClick={onReset}>
                취소
              </Button>
            </Link>
          </div>
        </Form.Item>
      </Form>
      {/* Form 컴포넌트 끝 */}
    </>
  );
};

export default App;
