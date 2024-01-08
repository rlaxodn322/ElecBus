import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button, message, Modal } from 'antd';
import MainLayout from '../../../layouts/Main';
import { PageProfile, ProfileTitle, ProfileInfo, ButtonWrapper } from './style';
import { deleteUserAPI } from '../../../components/apis/user/user';
import EditModal from '../../../components/Modals/auth/EditModal';

const MyPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [createdAt, setCreate] = useState('');
  const [updatedAt, setUpdate] = useState('');
  const [editModalOpen, setEditModalOpen] = useState(false); // 수정: visible → open
  const router = useRouter();

  useEffect(() => {
    const userDataString = sessionStorage.getItem('userData');
    if (userDataString !== null) {
      const userData = JSON.parse(userDataString);
      setName(userData.name);
      setEmail(userData.email);
      setCreate(userData.createdAt);
      setUpdate(userData.updatedAt);
      console.log(userData);
    }
  }, []);

  const handleEdit = () => {
    setEditModalOpen(true); // 수정: visible → open
  };

  const handleDelete = () => {
    Modal.confirm({
      title: '회원 탈퇴',
      content: '정말로 회원을 탈퇴하시겠습니까?',
      onOk: () => {
        deleteUserAPI(email)
          .then(() => {
            message.success('회원 탈퇴가 완료되었습니다.');
            router.push('/auth/login'); // 페이지 이동
          })
          .catch((error) => {
            message.error('회원 탈퇴 중 오류가 발생했습니다.');
            console.error(error);
          });
      },
      onCancel: () => {
        // 사용자가 취소한 경우 실행할 로직
      },
    });
  };

  const handleEditModalCancel = () => {
    setEditModalOpen(false); // 수정: visible → open
  };

  return (
    <>
      <Head>
        <title>마이페이지</title>
        <meta name="description" content="마이페이지" />
      </Head>
      <PageProfile>
        <ProfileTitle>마이페이지</ProfileTitle>
        <ProfileInfo>
          <div>
            <strong>이름:</strong> {name}
          </div>
          <div>
            <strong>이메일:</strong> {email}
          </div>
          <div>
            <strong>생성일:</strong> {createdAt}
          </div>
          <div>
            <strong>업데이트일:</strong> {updatedAt}
          </div>
          <ButtonWrapper>
            <Button type="primary" onClick={handleEdit}>
              정보수정
            </Button>
            <span className="button-gap" />
            <Button onClick={handleDelete}>회원탈퇴</Button>
          </ButtonWrapper>
        </ProfileInfo>
      </PageProfile>
      <EditModal open={editModalOpen} onCancel={handleEditModalCancel} user={{ name, email }} />
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
