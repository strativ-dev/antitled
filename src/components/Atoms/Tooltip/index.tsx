import { InfoCircleOutlined } from '@ant-design/icons';
import { Tooltip as AntdTooltip } from 'antd';
import type { TooltipProps as AntdTooltipProps } from 'antd';
import React, { ReactNode } from 'react';
import styled, { useTheme } from 'styled-components';

import {
  TextVariant,
  LineHeightVariant,
  TextColorVariant,
  WeightVariant,
} from '@/config/styles';

export type TooltipType = 'default' | 'with-subtitle';

export type TooltipAtomProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  size?: TextVariant;
  weight?: WeightVariant;
  lineHeight?: LineHeightVariant;
  color?: TextColorVariant;
  padding?: string;
  borderRadius?: string;
  children?: ReactNode;
  arrow?: 'Show' | 'Hide' | 'Center';
  type?: TooltipType;
  helperIcon?: ReactNode;
} & Omit<AntdTooltipProps, 'title'>;

export const Tooltip: React.FC<TooltipAtomProps> = ({
  title,
  subtitle,
  size = 'text-xs',
  weight = 'regular',
  lineHeight,
  color,
  padding = '4px 8px',
  arrow = 'Show',
  borderRadius,
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

  const tooltipTrigger = children || helperIcon || (
    <InfoCircleOutlined
      style={{
        color: theme.colors.texts.textPrimary900,
        cursor: 'pointer',
      }}
    />
  );

  const tooltipContent = (
    <StyledTooltipContent
      $size={size}
      $weight={weight}
      $lineHeight={lineHeight}
      $color={color}
      $padding={padding}
      $hasSubtitle={!!subtitle}>
      <div className='tooltip-title'>{title}</div>
      {subtitle && <div className='tooltip-subtitle'>{subtitle}</div>}
    </StyledTooltipContent>
  );

  return (
    <AntdTooltip
      arrow={mergedArrow}
      styles={{
        body: {
          borderRadius: borderRadius || theme.radius['md'],
          minHeight: type === 'with-subtitle' ? 'auto' : '2.375rem',
          width: type === 'with-subtitle' ? '320px' : 'auto',
        },
      }}
      color={theme.colors.backgrounds.bgPrimarySolid}
      title={tooltipContent}
      {...props}>
      {tooltipTrigger}
    </AntdTooltip>
  );
};

const StyledTooltipContent = styled.span<{
  $size: TextVariant;
  $weight: WeightVariant;
  $lineHeight?: LineHeightVariant;
  $color?: TextColorVariant;
  $padding: string;
  $hasSubtitle: boolean;
}>`
  display: inline-block;
  font-size: ${({ $size, theme }) => theme.fontSize[$size]}px;
  font-weight: ${({ $weight, $hasSubtitle, theme }) =>
    $hasSubtitle ? theme.fontWeight.medium : theme.fontWeight[$weight]};
  color: ${({ $color, theme }) =>
    $color
      ? theme.colors.texts[$color]
      : theme.mode === 'dark'
        ? theme.colors.Base.black
        : theme.colors.texts.textWhite};
  padding: ${({ $padding }) => $padding};
  line-height: ${({ $lineHeight, $size, theme }) =>
    $lineHeight ? theme.lineHeight[$lineHeight] : theme.lineHeight[$size]}px;

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
    line-height: 18px;
    font-size: ${({ theme }) => theme.fontSize['text-xs']}px;
  }
`;

export default Tooltip;
