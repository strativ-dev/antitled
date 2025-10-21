import { Check, ChevronDown } from '@untitledui/icons';
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

export type AntitledSelectProps = Omit<SelectProps, 'size'> & {
  size?: keyof typeof sizeMap;
  fullWidth?: boolean;
};

const getSizeProp = (size?: AntitledSelectProps['size']) => {
  if (!size) return 'middle';
  if (size in sizeMap) return sizeMap[size];
  return size as SelectProps['size'];
};

export const Select = ({
  size,
  fullWidth = false,
  suffixIcon,
  loading,
  menuItemSelectedIcon,
  ...props
}: AntitledSelectProps) => {
  const _suffixIcon = useMemo(() => {
    if (suffixIcon) return suffixIcon;
    if (loading) return <CircleSpinner size={16} />;
    return <ChevronDown size={18} />;
  }, [loading, suffixIcon]);

  const _menuItemSelectedIcon = useMemo(() => {
    if (menuItemSelectedIcon) return menuItemSelectedIcon;
    if (menuItemSelectedIcon === null) return null;
    return <Check size={16} />;
  }, [menuItemSelectedIcon]);

  return (
    <>
      <StyledSelect
        {...props}
        $fullWidth={fullWidth}
        size={getSizeProp(size)}
        suffixIcon={_suffixIcon}
        loading={loading}
        menuItemSelectedIcon={_menuItemSelectedIcon}
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
