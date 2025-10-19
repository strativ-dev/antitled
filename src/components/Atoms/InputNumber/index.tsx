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
};

const getSizeProp = (size?: Props['size']): InputNumberProps['size'] => {
  if (!size) return 'middle';
  if (size in sizeMap) return sizeMap[size as keyof typeof sizeMap];
  return size as InputNumberProps['size'];
};

export const InputNumber = memo<Props>(({ size, fullWidth, ...props }) => {
  return (
    <>
      <StyledInput {...props} size={getSizeProp(size)} $fullWidth={fullWidth} />
    </>
  );
});

export const StyledInput = styled(AntdInputNumber)<{ $fullWidth?: boolean }>`
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  .ant-input-number-prefix {
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors['texts']['textTertiary600']};
  }
`;
