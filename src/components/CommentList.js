/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { CommentListItem } from './CommentListItem';

export const CommentList = ({ comments }) => {
  return (
    <>
      {comments.map((comment) => {
        return <CommentListItem comment={comment} />;
      })}
    </>
  );
};
