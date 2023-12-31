// LoginButton.tsx
import React from 'react';
import Link from 'next/link';
import { Button } from 'antd';

interface LoginButtonProps {
  isLoggedIn: boolean;
  handleLogout: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ isLoggedIn, handleLogout }) => {
  return (
    <>
      {isLoggedIn ? (
        <>
          <Link href="/auth/mypage">
            <Button style={{ boxShadow: '2px 2px 2px 2px lightgrey' }}>마이페이지</Button>
          </Link>
          <Button style={{ boxShadow: '2px 2px 2px 2px lightgrey' }} onClick={handleLogout}>
            로그아웃
          </Button>
        </>
      ) : (
        <>
          <Link href="/auth/login">
            <Button style={{ boxShadow: '2px 2px 2px 2px lightgrey' }}>로그인</Button>
          </Link>
          <Link href="/auth/signup">
            <Button style={{ boxShadow: '2px 2px 2px 2px lightgrey' }}>회원가입</Button>
          </Link>
        </>
      )}
    </>
  );
};

export default LoginButton;
