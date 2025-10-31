import { ChevronLeft, ChevronRight } from '@untitledui/icons';
import {
  Pagination as AntdPagination,
  PaginationProps as AntdPaginationProps,
} from 'antd';
import { memo } from 'react';
import styled, { css } from 'styled-components';

type PaginationVariant = 'minimal' | 'button-group';

export type PaginationProps = Omit<AntdPaginationProps, 'size'> & {
  variant?: PaginationVariant;
  size?: 'sm' | 'md';
  hideNextPrevText?: boolean;
};

export const Pagination = memo<PaginationProps>(
  ({ variant = 'button-group', size = 'md', ...props }) => {
    return (
      <StyledPaginationWrapper $variant={variant} $size={size}>
        <AntdPagination
          {...props}
          showSizeChanger={false}
          prevIcon={<ChevronLeft size={20} />}
          nextIcon={<ChevronRight size={20} />}
          itemRender={(_page, type, originalElement) => {
            if (type === 'prev') {
              return (
                <PaginationButton $variant={variant} $size={size}>
                  <ChevronLeft size={20} />
                  <span>Previous</span>
                </PaginationButton>
              );
            }
            if (type === 'next') {
              return (
                <PaginationButton $variant={variant} $size={size}>
                  <span>Next</span>
                  <ChevronRight size={20} />
                </PaginationButton>
              );
            }
            // if (type === 'jump-prev' || type === 'jump-next') {
            //   return <span>...</span>;
            // }
            return originalElement;
          }}
        />
      </StyledPaginationWrapper>
    );
  }
);

Pagination.displayName = 'Pagination';

const PaginationButton = styled.div<{
  $variant: PaginationVariant;
  $size: 'sm' | 'md';
}>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: ${({ theme, $size }) =>
    $size === 'sm' ? theme.fontSize['text-sm'] : theme.fontSize['text-md']}px;
  line-height: ${({ theme, $size }) =>
    $size === 'sm'
      ? theme.lineHeight['text-sm']
      : theme.lineHeight['text-md']}px;
  color: ${({ theme }) => theme.colors.texts.textSecondary700};
`;

const getVariantStyles = (variant: PaginationVariant, size: 'sm' | 'md') => {
  const itemSize = size === 'sm' ? '2.25rem' : '2.5rem';
  const itemPadding = size === 'sm' ? '0.5rem 0.875rem' : '0.625rem 1rem';

  const baseStyles = css`
    .ant-pagination-item,
    .ant-pagination-prev,
    .ant-pagination-next {
      min-width: ${itemSize};
      height: ${itemSize};
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: ${({ theme }) => theme.radius.lg}px;
      border: 1px solid ${({ theme }) => theme.colors.borders.borderSecondary};
      background: ${({ theme }) => theme.colors.backgrounds.bgPrimary};
      margin: 0;
      font-weight: ${({ theme }) => theme.fontWeight.medium};
      font-size: ${({ theme }) =>
        size === 'sm'
          ? theme.fontSize['text-sm']
          : theme.fontSize['text-md']}px;
      line-height: ${({ theme }) =>
        size === 'sm'
          ? theme.lineHeight['text-sm']
          : theme.lineHeight['text-md']}px;
      color: ${({ theme }) => theme.colors.texts.textSecondary700};
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
        background: ${({ theme }) => theme.colors.backgrounds.bgSecondaryHover};
        border-color: ${({ theme }) => theme.colors.borders.borderSecondary};
        color: ${({ theme }) => theme.colors.texts.textSecondary700};

        a {
          color: inherit;
        }
      }

      &.ant-pagination-item-active {
        background: ${({ theme }) => theme.colors.backgrounds.bgPrimaryAlt};
        border-color: ${({ theme }) => theme.colors.borders.borderSecondary};
        color: ${({ theme }) => theme.colors.texts.textSecondary700};
        font-weight: ${({ theme }) => theme.fontWeight.semibold};

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

    .ant-pagination-prev,
    .ant-pagination-next {
      padding: ${itemPadding};
      width: auto;
      min-width: auto;

      button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        border: none;
        background: transparent;
        color: inherit;
        font-weight: inherit;
        font-size: inherit;
        line-height: inherit;
        padding: 0;
      }
    }

    /* .ant-pagination-jump-prev,
    .ant-pagination-jump-next {
      min-width: ${itemSize};
      height: ${itemSize};
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.colors.texts.textQuaternary500};
      font-size: ${({ theme }) =>
      size === 'sm' ? theme.fontSize['text-sm'] : theme.fontSize['text-md']}px;

      .ant-pagination-item-container {
        display: flex;
        align-items: center;
        justify-content: center;

        .ant-pagination-item-ellipsis {
          color: inherit;
        }
      }
    } */
  `;

  if (variant === 'minimal') {
    return css`
      ${baseStyles}

      .ant-pagination-item,
      .ant-pagination-prev,
      .ant-pagination-next,
      .ant-pagination-jump-prev,
      .ant-pagination-jump-next {
        border: none;
        background: transparent;

        &:hover:not(.ant-pagination-item-active) {
          background: ${({ theme }) =>
            theme.colors.backgrounds.bgSecondaryHover};
        }

        &.ant-pagination-item-active {
          background: ${({ theme }) => theme.colors.backgrounds.bgPrimaryAlt};
          border: 1px solid
            ${({ theme }) => theme.colors.borders.borderSecondary};
        }

        &.ant-pagination-disabled {
          background: transparent;
          border: none;
        }
      }
    `;
  }

  return baseStyles;
};

const StyledPaginationWrapper = styled.div<{
  $variant: PaginationVariant;
  $size: 'sm' | 'md';
}>`
  .ant-pagination {
    display: flex;
    align-items: center;

    ${({ $variant, $size }) =>
      getVariantStyles($variant, $size)}/* .ant-pagination-options {
      display: none;
    } */
  }
`;
