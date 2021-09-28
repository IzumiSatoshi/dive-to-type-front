/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { ThreadListItem } from './ThreadListItem';

export const ThreadList = ({ threads }) => {
  return (
    <>
      {threads.map((thread) => (
        <ThreadListItem thread={thread} />
      ))}
    </>
  );
};
