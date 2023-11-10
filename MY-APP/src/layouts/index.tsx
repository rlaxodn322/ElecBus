import MainHeader from '../components/Headers';
import MainNavbar from '../components/Navbars';
import MainFooter from '../components/Footers';
import Map from '../components/apis/kakao/map';
import { ContentsWrapper, Layout } from './style';

import React, { ReactNode } from 'react';

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Layout>
        <MainHeader />
        <MainNavbar />
    
        <ContentsWrapper>{children}</ContentsWrapper>
        <MainFooter />
      </Layout>
    </>
  );
};

export default MainLayout;
