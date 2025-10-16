import { Input as AntdInput, InputProps } from 'antd';
import { memo } from 'react';
import styled from 'styled-components';

const sizeMap = {
  sm: 'small',
  md: 'middle',
  lg: 'large',
} as const;

type Props = Omit<InputProps, 'size'> & {
  size?: keyof typeof sizeMap;
};

const getSizeProp = (size?: Props['size']): InputProps['size'] => {
  if (!size) return 'middle';
  if (size in sizeMap) return sizeMap[size as keyof typeof sizeMap];
  return size as InputProps['size'];
};

export const Input = memo<Props>(({ size, ...props }) => {
  return (
    <>
      <StyledInput {...props} size={getSizeProp(size)} />
    </>
  );
});

export const StyledInput = styled(AntdInput)`
  .ant-input-group-addon {
    color: ${({ theme }) => theme.colors['texts']['textTertiary600']};
  }
  .ant-input-prefix {
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors['foregrounds']['fgQuaternary400']};
  }
`;
