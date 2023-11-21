import styled from '@emotion/styled';
import React from 'react';
import type { LayoutProps } from '../types/pageWithLayout';
import MainHeader from '../components/Headers/index';
import MainNavbar from '../components/Navbars/index';

const MainLayout: LayoutProps = ({ children }) => {
  return (
    <>
      <Layout>
        <MainHeader />
        <MainNavbar />
        <ContentsWrapper>{children}</ContentsWrapper>
      </Layout>
    </>
  );
};

export default MainLayout;

const Layout = styled.section`
  margin: 0 auto;
  background-color: white;
`;

const ContentsWrapper = styled.div`
  max-width: 1800px;
  width: 100%;
  margin: 0 80px;
  min-height: 82.5dvh;

  background-color: white;

  @media (max-width: 1680px) {
    // width: 1200px;
  }

  @media (max-width: 1340px) {
    width: 100%;
    margin: 0 80px;
  }
`;
