import styled from 'styled-components';

import { typography } from '@/config/styles';

import { Select } from '@/components/Atoms/Select';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledSelect = styled(Select)`
  .ant-select-selector {
    padding: 0 !important;
    height: auto !important;
  }

  .ant-select-selection-item {
    display: flex;
    align-items: center;
    padding-right: 0 !important;
    font-weight: 500;
  }

  .ant-select-arrow {
    color: ${({ theme }) => theme.colors.texts.textPrimary900};
  }

  .ant-select-content {
    display: flex;
    align-items: center;
  }

  .ant-select-suffix {
    display: flex;
    align-items: center;
  }
`;

export const LabelWrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  ${typography('text-sm-regular')}
`;
