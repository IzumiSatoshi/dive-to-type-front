/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const CommentForm = () => {
  return (
    <div css={wrapperStyle}>
      <textarea css={textareaStyle}></textarea>
      <button css={submitButtonStyle}>Submit</button>
    </div>
  );
};

const wrapperStyle = css`
  text-align: center;
`;
const textareaStyle = css`
  width: 100%;
  height: 100px;
`;
const submitButtonStyle = css`
  width: 300px;
  height: 50px;
`;
