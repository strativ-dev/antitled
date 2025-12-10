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
      font-size: ${({ theme }) => theme.fontSize['text-sm']};
    }
  }

  /* make border radius of multiple select items to 6px */
  .ant-select-multiple,
  .ant-select-multiple.ant-select-sm,
  .ant-select-multiple.ant-select-lg {
    .ant-select-selection-overflow .ant-select-selection-item {
    border-radius: ${({ theme }) => theme.radius.sm};
  }
  }

  /* Make the InputNumber component addons background transparent */
  .ant-input-number-group-wrapper-outlined .ant-input-number-group-addon {
    background: transparent;
  }

  .ant-input-group-addon, .ant-input-number-group-addon {
    .ant-select-selector {
      color: ${({ theme }) => theme.colors.texts.textTertiary600};
    }
  }

  /* Add inputs shadows, Inconsistent, better not to add shadow to inputs */
/*
  .ant-input-affix-wrapper,
  .ant-input-group-wrapper,
  .ant-form-item-control-input-content,
  .ant-input-number-wrapper {
    box-shadow: ${({ theme }) => theme.shadows.xs};
  } */

  .ant-select-selection-item-content {
    align-content: center;
    font-size: ${({ theme }) => theme.fontSize['text-sm']};
    font-weight: 500;
  }

  .ant-select.ant-select-multiple:not(.ant-select-disabled) .ant-select-selection-item {
    color: ${({ theme }) => theme.colors.texts.textSecondary700};
  }

  .ant-select-dropdown .ant-select-item-option {
    font-size: ${({ theme }) => theme.fontSize['text-md']};
  }

  .ant-select-dropdown {
    border-radius: ${({ theme }) => theme.radius.md};
    border: 1px solid ${({ theme }) => theme.colors.borders.borderPrimary};
  }

  /* Tooltip */
  .ant-tooltip {
    max-width: 320px !important;
  }

  /* Form */
  /* Hint/Extra text of inputs */
  .ant-form-item .ant-form-item-extra,
  .ant-form-item .ant-form-item-explain-error
  {
    margin-top: 4px;
    font-size: ${({ theme }) => theme.fontSize['text-sm']};
  }

  .ant-form-item .ant-form-item-extra {
    color: ${({ theme }) => theme.colors.texts.textTertiary600};
  }

  .ant-form-item-label {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  .ant-form-vertical {
    .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional):before {
      display: none !important;
    }

    .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional):after {
      display: inline-block;
      margin-inline-start: 4px;
      color: ${({ theme }) => theme.colors.texts.textBrandSecondary700};
      font-size: ${({ theme }) => theme.fontSize['text-sm']};
      content: '*';
      visibility: visible;
    }
  }
`;

export default GlobalStyles;
