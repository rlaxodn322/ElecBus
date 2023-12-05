import React from 'react';
import Head from 'next/head';
import { ContentsWrapper, Layout } from './style';

const AuthLayout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title></title>
        <meta name="description" content="로그인페이지입니다." />
      </Head>
      <Layout>
        <ContentsWrapper>{children}</ContentsWrapper>
      </Layout>
    </>
  );
};

export default AuthLayout;
