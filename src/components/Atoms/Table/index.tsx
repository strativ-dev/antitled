import { Table as AntdTable, TableProps as AntdTableProps } from 'antd';
import styled from 'styled-components';

export type TableProps<T = unknown> = AntdTableProps<T> & {
  // Add custom props here if needed
};

export const Table = <T extends object = unknown>(props: TableProps<T>) => {
  const hasTableHeader = !!props.title;
  const hasTableFooter = !!props.footer;

  return (
    <StyledTable
      {...(props as unknown)}
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
  }

  thead > tr:first-child > *:last-child {
    border-top-right-radius: ${({ theme, $hasTableHeader }) =>
      $hasTableHeader ? 0 : theme.radius.xl}px;
    border-right: 1px solid
      ${({ theme }) => theme.colors.borders.borderSecondary};
  }

  // add border top of the header cells
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

  /* Body border radius when no header */
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

  /* Body border radius when no footer */
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

  /* .ant-checkbox-inner,
  .ant-checkbox-input {
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 0.4rem;
  }

  .ant-checkbox-inner::after {
    width: 6.72px;
    height: 11.2px;
    top: 47%;
  }

  .ant-checkbox-indeterminate .ant-checkbox-inner::after {
    width: 9px;
    height: 9px;
    top: 52%;
    border-radius: 0.125rem;
  } */

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
`;
