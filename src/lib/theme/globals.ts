import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }

  #root {
    color-scheme: light dark;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  //Select component styles
  .ant-select-single.ant-select-sm,
  .ant-select-multiple.ant-select-sm {
    .ant-select-selector  {
      font-size: ${({ theme }) => theme.fontSize['text-sm']}px;
    }
  }

  // make the sm variant dropdown items font-size smaller
  .ant-select-dropdown .ant-select-item-option {
    font-size: ${({ theme }) => theme.fontSize['text-md']}px;
  }

  .ant-select-dropdown {
    border-radius: ${({ theme }) => theme.radius.md};
    border: 1px solid ${({ theme }) => theme.colors.borders.borderPrimary};
  }
`;

export default GlobalStyles;
