'use client'

import { css } from '@emotion/react'

export const GlobalStyle = css`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard-dynamic-subset.css');
  html,
  body {
    font-family: 'Pretendard';
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }
  * {
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: underline;
  }
  p {
    margin: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
  button {
    cursor: pointer;
    border: none;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  pre,
  input,
  button,
  textarea {
    font-family: 'Pretendard';
  }
`
