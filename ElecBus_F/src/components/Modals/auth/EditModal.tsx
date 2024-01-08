import React from 'react';
import { Modal, Form, Input, Button, message } from 'antd';
import axios from 'axios';

const EditModal = ({ open, onCancel, user }) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      // 여기에 수정 정보를 서버로 보내는 로직을 추가합니다.
      await axios.patch('/user', { email: user.email, ...values });

      message.success('수정이 완료되었습니다.');
      onCancel(); // 수정 완료 후 모달 닫기
    } catch (error) {
      message.error('수정 중 오류가 발생했습니다.');
      console.error(error);
    }
  };

  const handleCancel = () => {
    form.resetFields(); // Form 데이터 초기화
    onCancel(); // 모달 닫기
  };

  return (
    <Modal title="정보 수정" open={open} onCancel={handleCancel} footer={null}>
      <Form form={form} onFinish={onFinish} initialValues={user}>
        <Form.Item label="이름" name="name" rules={[{ required: true, message: '이름을 입력하세요.' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="이메일" name="email" rules={[{ required: true, message: '이메일을 입력하세요.' }]}>
          <Input disabled />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          수정 완료
        </Button>
      </Form>
    </Modal>
  );
};

export default EditModal;
