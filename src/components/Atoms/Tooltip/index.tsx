import { HelpCircle } from '@untitledui/icons';
import type { TooltipProps as AntdTooltipProps } from 'antd';
import { Tooltip as AntdTooltip } from 'antd';
import React, { ReactNode, useMemo } from 'react';
import styled, { useTheme } from 'styled-components';

import { TextColorVariant, TextVariant } from '@/config/styles';

export type TooltipProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  fontSize?: TextVariant;
  color?: TextColorVariant;
  children?: ReactNode;
  arrow?: 'show' | 'hide' | 'center';
  helperIcon?: ReactNode;
} & Omit<AntdTooltipProps, 'title' | 'arrow'>;

export const Tooltip: React.FC<TooltipProps> = ({
  title,
  subtitle,
  fontSize = 'text-xs',
  color,
  arrow,
  children,
  helperIcon,
  ...props
}) => {
  const theme = useTheme();

  const hasSubtitle = Boolean(subtitle);

  const showCenteredArrow = !children && !helperIcon;

  const mergedArrow = useMemo<AntdTooltipProps['arrow']>(() => {
    if (arrow === 'show') {
      return true;
    }

    if (arrow === 'hide') {
      return false;
    }

    return {
      pointAtCenter: true,
    };
  }, [arrow, showCenteredArrow]);

  const tooltipTrigger = children || helperIcon || (
    <HelpCircle size={16} color={theme.colors.foregrounds.fgQuaternary400} />
  );

  const tooltipContent = (
    <StyledTooltipContent
      $fontSize={fontSize}
      $color={color}
      $hasSubtitle={hasSubtitle}>
      <div className='tooltip-title'>{title}</div>
      {hasSubtitle && <div className='tooltip-subtitle'>{subtitle}</div>}
    </StyledTooltipContent>
  );

  return (
    <AntdTooltip
      arrow={mergedArrow}
      color={theme.colors.backgrounds.bgPrimarySolid}
      title={tooltipContent}
      styles={{
        container: {
          borderRadius: theme.radius['md'],
          minHeight: hasSubtitle ? 'auto' : '2.375rem',
        },
      }}
      {...props}>
      {tooltipTrigger}
    </AntdTooltip>
  );
};

const StyledTooltipContent = styled.span<{
  $fontSize: TextVariant;
  $color?: TextColorVariant;
  $hasSubtitle: boolean;
}>`
  display: inline-block;
  font-size: ${({ $fontSize, theme }) => theme.fontSize[$fontSize]}px;
  padding: 0.25rem 0.5rem;
  color: ${({ $color, theme }) =>
    $color ? theme.colors.texts[$color] : theme.colors.texts.textWhite};

  .tooltip-title {
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    margin-bottom: ${({ $hasSubtitle }) => ($hasSubtitle ? '2px' : '0')};
  }

  .tooltip-subtitle {
    color: ${({ $color, theme }) =>
      $color
        ? theme.colors.texts[$color]
        : theme.colors.components.tooltipSupportingText};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;

export default Tooltip;
