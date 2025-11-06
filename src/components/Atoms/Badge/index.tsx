import { Tag as AntTag, ConfigProvider } from 'antd';
import clsx from 'clsx';
import { ComponentProps, useContext } from 'react';

import { TagWrapper } from './styles';

export type ExtendedVariant = 'solid' | 'outlined';
export type ExtendedColor =
  | 'primary'
  | 'brand'
  | 'success'
  | 'warning'
  | 'error'
  | 'gray'
  | 'gray-blue'
  | 'blue-light'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink'
  | 'orange';

export type TagRadius = 'sm' | 'md' | 'full';
export type TagSize = 'sm' | 'md' | 'lg';

export type TagProps = Omit<
  ComponentProps<typeof AntTag>,
  'size' | 'color' | 'variant'
> & {
  size?: TagSize;
  color?: ExtendedColor;
  radius?: TagRadius;
  variant?: ExtendedVariant;
  bordered?: boolean;
};

export const Badge = ({
  className,
  children,
  size = 'md',
  color = 'gray',
  radius = 'full',
  variant = 'solid',
  bordered = true,
  icon,
  ...rest
}: TagProps) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('tag');

  const iconOnly = !children && !!icon;

  return (
    <TagWrapper
      $size={size}
      $color={color}
      $radius={radius}
      $variant={variant}
      $bordered={bordered}
      $iconOnly={iconOnly}>
      <AntTag
        {...rest}
        icon={icon}
        className={clsx({ [`${prefixCls}-${size}`]: size }, className)}>
        {children}
      </AntTag>
    </TagWrapper>
  );
};

Badge.displayName = 'Badge';
