import { createGlobalStyle } from 'styled-components';
import { cssVariableDefinitions, toCssVariableBlock } from './cssVariables';

/** 전역 리셋·타이포·CSS 변수를 주입하는 GlobalStyle */
export const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: light;
    ${toCssVariableBlock(cssVariableDefinitions)}
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    background: var(--color-surface);
    color-scheme: light;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
  }

  body {
    margin: 0;
    color: var(--text);
    background: var(--background);
    font-family: var(--font-family-base);
    font-size: var(--font-body);
    line-height: var(--line-body);
    font-weight: var(--weight-body);
  }

  h1,
  h2,
  h3,
  p {
    margin-top: 0;
  }

  h1,
  .ui-h1 {
    font-size: var(--font-h1);
    line-height: var(--line-title);
    font-weight: var(--weight-title);
    letter-spacing: -0.05em;
  }

  h2,
  .ui-h2 {
    font-size: var(--font-h2);
    line-height: var(--line-title);
    font-weight: var(--weight-title);
    letter-spacing: -0.04em;
  }

  h3,
  .ui-h3 {
    font-size: var(--font-h3);
    line-height: 1.25;
    font-weight: var(--weight-title);
    letter-spacing: -0.04em;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
  }
`;
