import { InputNumber as AntdInputNumber, InputNumberProps } from 'antd';
import { memo } from 'react';
import styled from 'styled-components';

const sizeMap = {
  sm: 'small',
  md: 'middle',
  lg: 'large',
} as const;

type Props = Omit<InputNumberProps, 'size'> & {
  size?: keyof typeof sizeMap;
  fullWidth?: boolean;
  removeAffixLeftBorder?: boolean;
  removeAffixRightBorder?: boolean;
};

const getSizeProp = (size?: Props['size']): InputNumberProps['size'] => {
  if (!size) return 'middle';
  if (size in sizeMap) return sizeMap[size as keyof typeof sizeMap];
  return size as InputNumberProps['size'];
};

export const InputNumber = memo<Props>(
  ({
    size,
    fullWidth,
    removeAffixLeftBorder = false,
    removeAffixRightBorder = false,
    ...props
  }) => {
    return (
      <>
        <StyledInput
          {...props}
          size={getSizeProp(size)}
          $fullWidth={fullWidth}
          $removeAffixLeftBorder={removeAffixLeftBorder}
          $removeAffixRightBorder={removeAffixRightBorder}
        />
      </>
    );
  }
);

export const StyledInput = styled(AntdInputNumber)<{
  $fullWidth?: boolean;
  $removeAffixLeftBorder?: boolean;
  $removeAffixRightBorder?: boolean;
}>`
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  ${({ $removeAffixLeftBorder }) =>
    $removeAffixLeftBorder &&
    `
    :not(:hover).ant-input-number-affix-wrapper {
      border-left: none !important;
    }
  `}
  ${({ $removeAffixRightBorder }) =>
    $removeAffixRightBorder &&
    `
    :not(:hover).ant-input-number-affix-wrapper {
      border-right: none !important;
    }
  `}
  .ant-input-number-prefix {
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors['texts']['textTertiary600']};
  }
`;
