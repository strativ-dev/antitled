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
      {...(props as AntdTableProps<unknown>)}
      $hasTableHeader={hasTableHeader}
      $hasTableFooter={hasTableFooter}
    />
  );
};

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
  }

  /* Custom Sorter Icons */
  .ant-table-column-sorter {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    margin-left: 0.275rem;
    margin-top: 0.25rem;
    gap: 0;
  }

  .ant-table-column-sorter-up,
  .ant-table-column-sorter-down {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 0.25rem;
    line-height: 0;
  }

  /* Hide default icons */
  .ant-table-column-sorter-up svg,
  .ant-table-column-sorter-down svg {
    display: none;
  }

  /* Default state - show both arrows using mask */
  .ant-table-column-sorter-up::before,
  .ant-table-column-sorter-down::before {
    content: '';
    display: inline-block;
    width: 0.875rem;
    height: 0.875rem;
    background-color: ${({ theme }) =>
      theme.colors.foregrounds.fgQuaternary400};
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
  }

  .ant-table-column-sorter-up::before {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6-6 6 6'/%3E%3C/svg%3E");
  }

  .ant-table-column-sorter-down::before {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 15 6 6 6-6'/%3E%3C/svg%3E");
  }

  /* When ascending - hide up arrow, show only down arrow in brand color */
  .ant-table-column-sorter-up.active {
    display: none;
  }

  .ant-table-column-sorter-up.active + .ant-table-column-sorter-down::before {
    margin-top: 0.25rem;
    background-color: ${({ theme }) => theme.colors.Brand[500]};
    mask-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 2.5V9.5M6 9.5L9.5 6M6 9.5L2.5 6' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
  }

  /* When descending - hide down arrow, show only up arrow in brand color */
  .ant-table-column-sorter-down.active {
    display: none;
  }

  .ant-table-column-sorter-down.active ~ .ant-table-column-sorter-up::before,
  .ant-table-column-sorter-up:not(.active):has(
      + .ant-table-column-sorter-down.active
    )::before {
    background-color: ${({ theme }) => theme.colors.Brand[500]};
    mask-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 2.5V9.5M6 9.5L9.5 6M6 9.5L2.5 6' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
    rotate: 180deg;
  }
`;
