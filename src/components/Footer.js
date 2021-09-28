/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const Footer = () => {
  return <footer css={footer}>done is better than perfect....</footer>;
};

const footer = css`
  position: absolute;
  bottom: 0;

  width: 100%;
  margin-top: 60px;

  text-align: center;
  color: #fff;
  background: #2f2e30;

  padding: 20px;
`;
