import { ChevronDown } from '@untitledui/icons';
import { SelectProps } from 'antd';
import { Select as AntdSelect } from 'antd';
import { useMemo } from 'react';
import styled from 'styled-components';

import { CircleSpinner } from '@/components/Atoms/CircleSpinner';

const sizeMap = {
  sm: 'small',
  md: 'middle',
  lg: 'large',
} as const;

type Props = Omit<SelectProps, 'size'> & {
  size?: keyof typeof sizeMap;
  fullWidth?: boolean;
};

const getSizeProp = (size?: Props['size']) => {
  if (!size) return 'middle';
  if (size in sizeMap) return sizeMap[size];
  return size as SelectProps['size'];
};

export const Select = ({
  size,
  fullWidth = false,
  suffixIcon,
  loading,
  ...props
}: Props) => {
  const _suffixIcon = useMemo(() => {
    if (suffixIcon) return suffixIcon;
    if (loading) return <CircleSpinner size={16} />;
    return <ChevronDown size={18} />;
  }, [loading, suffixIcon]);

  return (
    <>
      <StyledSelect
        $fullWidth={fullWidth}
        size={getSizeProp(size)}
        suffixIcon={_suffixIcon}
        loading={loading}
        {...props}
      />
    </>
  );
};

const StyledSelect = styled(AntdSelect)<{
  $fullWidth: boolean;
}>`
  width: ${({ $fullWidth }: { $fullWidth: boolean }) =>
    $fullWidth ? '100%' : 'auto'};
`;
