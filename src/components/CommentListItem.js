/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Card } from './Card';

export const CommentListItem = ({ comment }) => {
  return (
    <Card>
      <p css={textStyle}>{comment.text}</p>
    </Card>
  );
};

const textStyle = css`
  padding: 10px;
`;
