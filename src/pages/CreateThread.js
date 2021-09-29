/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { BasePage } from './BasePage';

export const CreateThread = () => {
  return (
    <BasePage>
      <h2 css={title}>Create new thread!</h2>
      <input type="text" css={titleInputStyle} />
      <textarea css={textareaStyle}></textarea>
      <button css={submitButtonStyle}>Create</button>
    </BasePage>
  );
};

const title = css`
  text-align: center;
  margin-bottom: 30px;
`;

const titleInputStyle = css`
  display: block;
  margin: 0 auto;
  width: 600px;
  font-size: 2rem;
  margin-bottom: 30px;
`;

const textareaStyle = css`
  display: block;
  margin: 0 auto;
  width: 600px;
  height: 300px;
  margin-bottom: 50px;
`;

const submitButtonStyle = css`
  display: block;
  margin: 0 auto;
  width: 300px;
  height: 50px;
`;
