/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { useParams } from 'react-router';
import { BasePage } from './BasePage';
import { fetch_comments, fetch_thread } from '../dummy_data';
import { Card } from '../components/Card';
import { CommentList } from '../components/CommentList';
import { CommentForm } from '../components/CommentForm';

export const Details = (props) => {
  const { id } = useParams();
  const thread = fetch_thread(id);
  const threadComments = fetch_comments(id);
  return (
    <BasePage>
      {/*最初のカードは、タイトルと説明文*/}
      <Card>
        <h2 css={titleStyle}>{thread.title}</h2>
        <p css={discriptionStyle}>{thread.discription}</p>
      </Card>
      {/*2つ目以降のカードはコメント*/}
      <CommentList comments={threadComments} />

      <CommentForm />
    </BasePage>
  );
};

const titleStyle = css`
  padding: 20px;
  border-bottom: solid 1px #333;
`;

const discriptionStyle = css`
  padding: 20px;
`;
