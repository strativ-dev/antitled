import styled, { css, DefaultTheme } from 'styled-components';

import {
  ButtonType,
  NextPrevType,
  PaginationSize,
  PaginationVariant,
} from './types';

// ============================================================================
// Helper Functions
// ============================================================================

const getNextPrevButtonStyle = (
  theme: DefaultTheme,
  variant: PaginationVariant,
  isNext: boolean
) => {
  if (variant === 'button-group') {
    return css`
      border-top-left-radius: ${!isNext ? theme.radius.md : 0}px;
      border-bottom-left-radius: ${!isNext ? theme.radius.md : 0}px;
      border-top-right-radius: ${isNext ? theme.radius.md : 0}px;
      border-bottom-right-radius: ${isNext ? theme.radius.md : 0}px;
    `;
  }

  return css`
    border-radius: ${theme.radius.md}px;
  `;
};

const getVariantStyles = (
  variant: PaginationVariant,
  size: PaginationSize,
  buttonType: ButtonType
) => {
  const itemSize = size === 'sm' ? '2.25rem' : '2.5rem';

  const baseStyles = css`
    .ant-pagination-item,
    .ant-pagination-prev,
    .ant-pagination-next {
      min-width: ${itemSize};
      height: ${itemSize};
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 0;
      border: none;
      background: ${({ theme }) => theme.colors.backgrounds.bgPrimary};
      margin: 0;
      font-size: ${({ theme }) => theme.fontSize['text-sm']}px;
      line-height: ${itemSize};
      color: ${({ theme }) => theme.colors.texts.textQuaternary500};
      transition: all 0.2s ease;

      a {
        color: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }

      &:hover:not(.ant-pagination-item-active) {
        background: ${({ theme }) => theme.colors.backgrounds.bgPrimaryHover};
        color: ${({ theme }) => theme.colors.texts.textSecondary700};

        a {
          color: inherit;
        }
      }

      &.ant-pagination-item-active {
        background: ${({ theme }) => theme.colors.backgrounds.bgPrimaryHover};
        color: ${({ theme }) => theme.colors.texts.textSecondary700};

        a {
          color: inherit;
        }
      }

      &.ant-pagination-disabled {
        background: ${({ theme }) => theme.colors.backgrounds.bgPrimary};
        border-color: ${({ theme }) => theme.colors.borders.borderSecondary};
        opacity: 0.5;
        cursor: not-allowed;

        &:hover {
          background: ${({ theme }) => theme.colors.backgrounds.bgPrimary};
          border-color: ${({ theme }) => theme.colors.borders.borderSecondary};
        }
      }
    }

    .ant-pagination-prev {
      border-top-left-radius: ${({ theme }) => theme.radius.md}px;
      border-bottom-left-radius: ${({ theme }) => theme.radius.md}px;
    }

    .ant-pagination-next {
      border-top-right-radius: ${({ theme }) => theme.radius.md}px;
      border-bottom-right-radius: ${({ theme }) => theme.radius.md}px;
    }

    .ant-pagination-jump-prev,
    .ant-pagination-jump-next {
      min-width: ${itemSize};
      height: ${itemSize};
      line-height: ${itemSize};

      .ant-pagination-item-container {
        .ant-pagination-item-ellipsis {
          font-size: ${({ theme }) => theme.fontSize['text-xxs']}px;
          color: ${({ theme }) => theme.colors.texts.textQuaternary500};
        }
      }
    }

    .ant-pagination-options {
      .ant-pagination-options-quick-jumper {
        font-size: ${({ theme }) => theme.fontSize['text-sm']}px;
        font-weight: ${({ theme }) => theme.fontWeight.medium};
        color: ${({ theme }) => theme.colors.texts.textSecondary700};

        height: ${itemSize};
        line-height: ${itemSize};

        input {
          height: ${itemSize};
        }
      }
    }

    .ant-select-single {
      font-size: ${({ theme }) => theme.fontSize['text-sm']}px;
      font-weight: ${({ theme }) => theme.fontWeight.medium};
      color: ${({ theme }) => theme.colors.texts.textSecondary700};
      height: ${itemSize};

      .ant-select-selection-item {
        color: ${({ theme }) => theme.colors.texts.textSecondary700};
      }
    }

    .ant-pagination:not(.ant-pagination-disabled)
      .ant-pagination-item:focus-visible,
    .ant-pagination:not(.ant-pagination-disabled)
      .ant-pagination-jump-next:focus-visible {
      display: block;
      z-index: 2;
    }
  `;

  if (variant === 'minimal') {
    return css`
      ${baseStyles};
      gap: 0.125rem;

      .ant-pagination-item,
      .ant-pagination-prev,
      .ant-pagination-next {
        gap: 0.125rem;
        font-weight: ${({ theme }) => theme.fontWeight.medium};
      }

      .ant-pagination-item {
        border-radius: ${({ theme }) =>
          buttonType === 'square' ? theme.radius.md : 9999}px;

        a {
          border-radius: ${({ theme }) =>
            buttonType === 'square' ? theme.radius.md : 9999}px;
        }
      }

      .ant-pagination-prev {
        border-top-right-radius: ${({ theme }) => theme.radius.md}px;
        border-bottom-right-radius: ${({ theme }) => theme.radius.md}px;
      }

      .ant-pagination-next {
        border-top-left-radius: ${({ theme }) => theme.radius.md}px;
        border-bottom-left-radius: ${({ theme }) => theme.radius.md}px;
      }
    `;
  }

  if (variant === 'button-group') {
    return css`
      ${baseStyles};

      .ant-pagination-item,
      .ant-pagination-prev,
      .ant-pagination-next {
        font-weight: ${({ theme }) => theme.fontWeight.semibold};
      }

      .ant-pagination-item {
        border-top: 1px solid
          ${({ theme }) => theme.colors.borders.borderPrimary};
        border-bottom: 1px solid
          ${({ theme }) => theme.colors.borders.borderPrimary};
      }

      &.ant-pagination-item-active {
        color: ${({ theme }) =>
          theme.colors.texts.textSecondaryHover} !important;

        a {
          color: inherit;
        }
      }

      .ant-pagination-jump-prev,
      .ant-pagination-jump-next {
        border-radius: 0px;
        margin: 0;
        border-top: 1px solid
          ${({ theme }) => theme.colors.borders.borderPrimary};
        border-bottom: 1px solid
          ${({ theme }) => theme.colors.borders.borderPrimary};
      }

      /* Add left border to all adjacent pagination items */
      .ant-pagination-item + .ant-pagination-item,
      .ant-pagination-item + .ant-pagination-jump-next,
      .ant-pagination-item + .ant-pagination-jump-prev,
      .ant-pagination-jump-next + .ant-pagination-item,
      .ant-pagination-jump-next + .ant-pagination-jump-next,
      .ant-pagination-jump-next + .ant-pagination-jump-prev,
      .ant-pagination-jump-prev + .ant-pagination-item,
      .ant-pagination-jump-prev + .ant-pagination-jump-next,
      .ant-pagination-jump-prev + .ant-pagination-jump-prev {
        border-left: 1px solid
          ${({ theme }) => theme.colors.borders.borderPrimary};
      }
    `;
  }

  return baseStyles;
};

// ============================================================================
// Styled Components
// ============================================================================

export const PaginationButton = styled.div<{
  $variant: PaginationVariant;
  $size: PaginationSize;
  $iconOnly?: boolean;
  $nextPrevType?: NextPrevType;
  $isNext?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: ${({ $iconOnly }) => ($iconOnly ? '0' : '0.25rem')};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: ${({ theme }) => theme.fontSize['text-sm']}px;
  line-height: ${({ theme }) => theme.lineHeight['text-sm']}px;
  color: ${({ theme }) => theme.colors.texts.textTertiary600};

  padding: ${({ $iconOnly }) => ($iconOnly ? '0' : '0 0.75rem')};

  .arrow-icon {
    color: ${({ theme }) => theme.colors.foregrounds.fgQuaternary400};
  }

  ${({ $nextPrevType, theme, $size }) =>
    $nextPrevType === 'bordered'
      ? css`
          height: ${$size === 'sm' ? '2.25rem' : '2.5rem'};
          border: 1px solid ${theme.colors.borders.borderPrimary};
          background-color: ${theme.colors.backgrounds.bgPrimary};
          transition: all 0.2s ease;
          padding: 0 0.75rem;

          &:hover {
            background-color: ${theme.colors.backgrounds.bgPrimaryHover};
          }
        `
      : css`
          /* Minimal Style */
        `}
  ${({ theme, $variant, $isNext }) =>
    getNextPrevButtonStyle(theme, $variant, !!$isNext)}
`;

export const StyledPaginationWrapper = styled.div<{
  $variant: PaginationVariant;
  $size: PaginationSize;
  $buttonType: ButtonType;
}>`
  .ant-pagination {
    display: flex;
    align-items: center;

    ${({ $variant, $size, $buttonType }) =>
      getVariantStyles($variant, $size, $buttonType)}
  }
`;
