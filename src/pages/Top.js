/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ThreadList } from '../components/ThreadList';
import { BasePage } from './BasePage';
import { threads } from '../dummy_data';

export const Top = () => {
  return (
    <BasePage>
      <ThreadList threads={threads} />
    </BasePage>
  );
};
