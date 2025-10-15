import { InfoCircleOutlined } from '@ant-design/icons';
import { Tooltip as AntdTooltip } from 'antd';
import type { TooltipProps as AntdTooltipProps } from 'antd';
import React, { ReactNode } from 'react';
import styled, { useTheme } from 'styled-components';

import { TextVariant, TextColorVariant } from '@/config/styles';

export type TooltipType = 'default' | 'with-subtitle';

export type TooltipProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  size?: TextVariant;
  color?: TextColorVariant;
  children?: ReactNode;
  arrow?: 'Show' | 'Hide' | 'Center';
  type?: TooltipType;
  helperIcon?: ReactNode;
} & Omit<AntdTooltipProps, 'title'>;

export const Tooltip: React.FC<TooltipProps> = ({
  title,
  subtitle,
  size = 'text-xs',
  color,
  arrow = 'Show',
  children,
  type = 'default',
  helperIcon,
  ...props
}) => {
  const theme = useTheme();

  const mergedArrow: AntdTooltipProps['arrow'] =
    arrow === 'Hide'
      ? false
      : arrow === 'Center'
        ? { pointAtCenter: true }
        : true;

  const tooltipTrigger = children || helperIcon || <StyledHelperIcon />;

  const tooltipContent = (
    <StyledTooltipContent $size={size} $color={color} $hasSubtitle={!!subtitle}>
      <div className='tooltip-title'>{title}</div>
      {subtitle && <div className='tooltip-subtitle'>{subtitle}</div>}
    </StyledTooltipContent>
  );

  return (
    <AntdTooltip
      arrow={mergedArrow}
      color={theme.colors.backgrounds.bgPrimarySolid}
      title={tooltipContent}
      styles={{
        body: {
          borderRadius: theme.radius['md'],
          minHeight: type === 'with-subtitle' ? 'auto' : '2.375rem',
          width: type === 'with-subtitle' ? '320px' : 'auto',
        },
      }}
      {...props}>
      {tooltipTrigger}
    </AntdTooltip>
  );
};

const StyledHelperIcon = styled(InfoCircleOutlined)`
  color: ${({ theme }) => theme.colors.texts.textPrimary900};
  cursor: pointer;
`;

const StyledTooltipContent = styled.span<{
  $size: TextVariant;
  $color?: TextColorVariant;
  $hasSubtitle: boolean;
}>`
  display: inline-block;
  font-size: ${({ $size, theme }) => theme.fontSize[$size]}px;
  padding: 0.25rem 0.5rem;
  color: ${({ $color, theme }) =>
    $color
      ? theme.colors.texts[$color]
      : theme.mode === 'dark'
        ? theme.colors.Base.black
        : theme.colors.texts.textWhite};

  .tooltip-title {
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    margin-bottom: ${({ $hasSubtitle }) => ($hasSubtitle ? '2px' : '0')};
  }

  .tooltip-subtitle {
    color: ${({ $color, theme }) =>
      $color
        ? theme.colors.texts[$color]
        : theme.mode === 'dark'
          ? theme.colors.Base.black
          : theme.colors.Gray['300']};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    line-height: ${({ theme }) => theme.lineHeight['text-xs']}px;
  }
`;

export default Tooltip;
