/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const MainWrapper = ({ children }) => {
  return (
    <>
      <div css={mainWrapper}>{children}</div>
    </>
  );
};

const mainWrapper = css`
  width: 1000px;
  margin: 0 auto;
`;
