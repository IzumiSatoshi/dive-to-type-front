/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { Card } from './Card';

export const ThreadListItem = ({ thread }) => {
  // thread = {id: 1, title: hoge, discription: hoge}
  const linkTo = `details/${thread.id}`;
  // TODO: Linkをカード全体に広げているが、テキストの選択とかボタン押したりができるようにしたい
  return (
    <Card>
      <h1 css={title}>{thread.title}</h1>
      <p css={discription}>{thread.discription}</p>
      <Link to={linkTo} css={link}></Link>
    </Card>
  );
};

const title = css`
  padding: 10px;
  border-bottom: solid 1px #333;
`;

const discription = css`
  padding: 20px;
`;

const link = css`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
