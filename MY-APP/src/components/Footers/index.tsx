import React from 'react';
import { Layout } from './style';

const MainFooter = () => {
  return (
    <>
      <Layout>
        <footer>
          <nav>
            <img src="/images/FirstLogo.jpeg"></img>
            <a>First C&D</a>
          </nav>
          <p>
            <span>저자 : 최재민</span>
            <span>이메일 : jaemin@firstcorea.com</span>
            <span>Copyright 2023. 최재민. ALL Rights Reserved.</span>
          </p>
        </footer>
      </Layout>
    </>
  );
};

export default MainFooter;
