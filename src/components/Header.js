/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header css={headerStyle}>
      <div css={titleStyle}>DIVE TO TYPE</div>
      <ul css={linkListStyle}>
        <li css={listItemStyle}>
          <Link to="/" css={linkStyle}>
            Top
          </Link>
        </li>
        <li css={listItemStyle}>
          <Link to="/create" css={linkStyle}>
            Create
          </Link>
        </li>
      </ul>
    </header>
  );
};

const headerStyle = css`
  margin-bottom: 50px;
`;

const titleStyle = css`
  padding: 20px 0;
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  background: #dbe1e6;
  text-align: center;
`;

const linkListStyle = css`
  width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
const listItemStyle = css`
  list-style: none;
  padding: 0 20px;
`;
const linkStyle = css`
  display: inline-block;
  text-decoration: none;
  color: #333;
  padding: 10px;
  border: solid 1px #333;
`;
