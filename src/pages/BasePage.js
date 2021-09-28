/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';
import { css } from '@emotion/react';

import { MainWrapper } from '../components/MainWrapper';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

// ページの共通部を切り出した
export const BasePage = ({ children }) => {
  useEffect(() => {
    // 背景色を変更。このやり方であっているかは不明。
    document.body.style = 'background: #dbe1e6';
  }, []);
  return (
    <>
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </>
  );
};
