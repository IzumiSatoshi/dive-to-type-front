/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const Card = ({ children }) => {
  return <div css={card}>{children}</div>;
};

const card = css`
  position: relative;
  margin-bottom: 30px;
  background: #fefffe;
`;
