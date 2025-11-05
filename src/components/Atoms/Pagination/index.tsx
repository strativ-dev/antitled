import {
  Pagination as AntdPagination,
  PaginationProps as AntdPaginationProps,
} from 'antd';
import { memo } from 'react';

import { renderNextButton, renderPrevButton } from './helpers';
import { StyledPaginationWrapper } from './styles';
import { PaginationProps } from './types';

export type { PaginationProps } from './types';

// ============================================================================
// Component
// ============================================================================

export const Pagination = memo<PaginationProps>(
  ({
    variant = 'button-group',
    size = 'sm',
    buttonType = 'square',
    nextButtonText,
    prevButtonText,
    nextPrevType = 'minimal',
    hideNextPrevText = false,
    showSizeChanger = false,
    ...props
  }) => {
    const itemRender: AntdPaginationProps['itemRender'] = (
      _page,
      type,
      originalElement
    ) => {
      if (type === 'prev') {
        return renderPrevButton({
          variant,
          size,
          nextPrevType,
          hideNextPrevText,
          buttonText: prevButtonText ?? 'Previous',
        });
      }

      if (type === 'next') {
        return renderNextButton({
          variant,
          size,
          nextPrevType,
          hideNextPrevText,
          buttonText: nextButtonText ?? 'Next',
        });
      }

      return originalElement;
    };

    return (
      <StyledPaginationWrapper
        $variant={variant}
        $size={size}
        $buttonType={buttonType}>
        <AntdPagination
          showSizeChanger={showSizeChanger}
          {...props}
          itemRender={itemRender}
        />
      </StyledPaginationWrapper>
    );
  }
);

Pagination.displayName = 'Pagination';
