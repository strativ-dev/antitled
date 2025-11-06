import { ChevronDown, ChevronUp } from '@untitledui/icons';
import { Table as AntdTable, TableProps as AntdTableProps } from 'antd';
import styled from 'styled-components';

export type TableProps<T = unknown> = AntdTableProps<T> & {
  // Add custom props here if needed
};

export const Table = <T extends object = object>(props: TableProps<T>) => {
  const hasTableHeader = !!props.title;
  const hasTableFooter = !!props.footer;

  return (
    <StyledTable
      {...(props as unknown as unknown)}
      $hasTableHeader={hasTableHeader}
      $hasTableFooter={hasTableFooter}
      sortIcon={({
        sortOrder,
      }: {
        sortOrder: 'ascend' | 'descend' | null | undefined;
      }) => {
        return (
          <SorterIconWrapper className='ant-table-column-sorter-custom'>
            <ChevronUp
              size={12}
              className={sortOrder === 'ascend' ? 'active' : ''}
            />
            <ChevronDown
              size={12}
              className={sortOrder === 'descend' ? 'active' : ''}
            />
          </SorterIconWrapper>
        );
      }}
    />
  );
};

const SorterIconWrapper = styled.span`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin-left: 0.25rem;
  gap: -0.25rem;

  svg {
    color: ${({ theme }) => theme.colors.foregrounds.fgQuaternary400};
    transition: color 0.2s ease;

    &.active {
      color: ${({ theme }) => theme.colors.Brand['500']};
    }
  }
`;

const StyledTable = styled(AntdTable)<{
  $hasTableHeader?: boolean;
  $hasTableFooter?: boolean;
}>`
  box-shadow: ${({ theme }) => theme.shadows.xs};
  border-radius: ${({ theme }) => theme.radius.xl}px;
  border-color: transparent;

  .ant-table-cell {
    &.ant-table-selection-column {
      padding-left: 1.5rem;
      padding-right: 0;
      text-align: right;
    }

    &::before {
      display: none;
    }
  }

  thead > tr:first-child > *:last-child {
    border-top-right-radius: ${({ theme, $hasTableHeader }) =>
      $hasTableHeader ? 0 : theme.radius.xl}px;
    border-right: 1px solid
      ${({ theme }) => theme.colors.borders.borderSecondary};
  }

  thead > tr > th {
    border-top: 1px solid ${({ theme }) => theme.colors.borders.borderSecondary};
  }

  thead > tr:first-child > *:first-child {
    border-top-left-radius: ${({ theme, $hasTableHeader }) =>
      $hasTableHeader ? 0 : theme.radius.xl}px;
    border-left: 1px solid
      ${({ theme }) => theme.colors.borders.borderSecondary};
  }

  tbody > tr > td:first-child {
    border-left: 1px solid
      ${({ theme }) => theme.colors.borders.borderSecondary};
  }
  tbody > tr > td:last-child {
    border-right: 1px solid
      ${({ theme }) => theme.colors.borders.borderSecondary};
  }

  ${({ $hasTableHeader }) =>
    !$hasTableHeader &&
    `
    tbody > tr:first-child > td:first-child {
      border-top-left-radius: 0.5rem;
    }
    tbody > tr:first-child > td:last-child {
      border-top-right-radius: 0.5rem;
    }
  `}

  ${({ $hasTableFooter }) =>
    !$hasTableFooter &&
    `
    tbody > tr:last-child > td:first-child {
      border-bottom-left-radius: 0.5rem;
    }
    tbody > tr:last-child > td:last-child {
      border-bottom-right-radius: 0.5rem;
    }
  `}


  .ant-table-tbody > tr > td:nth-of-type(2) {
    padding-left: 0.75rem;
  }
  thead > tr > th:nth-of-type(2) {
    padding-left: 0.75rem;
  }

  .ant-table-thead > tr > th {
  }

  .ant-table-title {
    border-top: 1px solid;
    border-inline: 1px solid;
    border-color: ${({ theme }) => theme.colors.borders.borderSecondary};
    border-top-left-radius: ${({ theme }) => theme.radius.xl}px !important;
    border-top-right-radius: ${({ theme }) => theme.radius.xl}px !important;
  }
  .ant-table-footer {
    border-bottom: 1px solid;
    border-inline: 1px solid;
    border-color: ${({ theme }) => theme.colors.borders.borderSecondary};
    border-bottom-left-radius: ${({ theme }) => theme.radius.xl}px !important;
    border-bottom-right-radius: ${({ theme }) => theme.radius.xl}px !important;
  }

  .ant-table-column-sorters {
    justify-content: flex-start;
    align-items: center;
    .ant-table-column-title {
      flex: none;
    }
    .ant-table-column-sorter {
      margin-top: 0.125rem;
    }
    .ant-table-column-sorter-up,
    .ant-table-column-sorter-down {
      font-size: ${({ theme }) => theme.fontSize['text-xs']}px;
    }
  }
`;
