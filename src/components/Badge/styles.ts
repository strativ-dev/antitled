import styled, { DefaultTheme } from 'styled-components';

import { ExtendedColor, TagRadius, ExtendedVariant, TagProps } from './index';

export const getTagColor = (
  theme: DefaultTheme,
  color?: ExtendedColor
): { bg: string; text: string; border: string } => {
  switch (color) {
    case 'primary':
      return {
        bg: theme.colors.Base.white,
        text: theme.colors['Gray (light mode)']['700'],
        border: theme.colors['Gray (light mode)']['300'],
      };
    case 'brand':
      return {
        bg: theme.colors.Brand['50'],
        text: theme.colors.Brand['700'],
        border: theme.colors.Brand['200'],
      };
    case 'success':
      return {
        bg: theme.colors.Success['50'],
        text: theme.colors.Success['700'],
        border: theme.colors.Success['200'],
      };
    case 'warning':
      return {
        bg: theme.colors.Warning['50'],
        text: theme.colors.Warning['700'],
        border: theme.colors.Warning['200'],
      };
    case 'error':
      return {
        bg: theme.colors.Error['50'],
        text: theme.colors.Error['700'],
        border: theme.colors.Error['200'],
      };
    case 'gray':
      return {
        bg: theme.colors['Gray (light mode)']['50'],
        text: theme.colors['Gray (light mode)']['700'],
        border: theme.colors['Gray (light mode)']['200'],
      };
    case 'gray-blue':
      return {
        bg: theme.colors['Gray blue']['50'],
        text: theme.colors['Gray blue']['700'],
        border: theme.colors['Gray blue']['200'],
      };
    case 'blue-light':
      return {
        bg: theme.colors['Blue light']['50'],
        text: theme.colors['Blue light']['700'],
        border: theme.colors['Blue light']['200'],
      };
    case 'blue':
      return {
        bg: theme.colors.Blue['50'],
        text: theme.colors.Blue['700'],
        border: theme.colors.Blue['200'],
      };
    case 'indigo':
      return {
        bg: theme.colors.Indigo['50'],
        text: theme.colors.Indigo['700'],
        border: theme.colors.Indigo['200'],
      };
    case 'purple':
      return {
        bg: theme.colors.Purple['50'],
        text: theme.colors.Purple['700'],
        border: theme.colors.Purple['200'],
      };
    case 'pink':
      return {
        bg: theme.colors.Pink['50'],
        text: theme.colors.Pink['700'],
        border: theme.colors.Pink['200'],
      };
    case 'orange':
      return {
        bg: theme.colors.Orange['50'],
        text: theme.colors.Orange['700'],
        border: theme.colors.Orange['200'],
      };
    default:
      return getTagColor(theme, 'gray');
  }
};

export const TagWrapper = styled.div<{
  $size?: TagProps['size'];
  $color?: ExtendedColor;
  $radius?: TagRadius;
  $variant?: ExtendedVariant;
  $bordered?: boolean;
  $iconOnly?: boolean;
}>`
  display: inline-flex;
  align-items: center;

  && .ant-tag {
    margin: 0.125rem;

    ${({
      theme,
      $color = 'gray',
      $variant = 'solid',
      $bordered = true,
      $radius = 'full',
      $size = 'md',
      $iconOnly,
    }) => {
      const { bg, text, border } = getTagColor(theme, $color);

      const getVariantStyles = () =>
        $variant === 'outlined'
          ? `background-color: transparent; color: ${text}; border: ${$bordered ? `0.0625rem solid ${border}` : 'none'};`
          : `background-color: ${bg}; color: ${text}; border: ${$bordered ? `0.0625rem solid ${border}` : 'none'};`;

      const sizeStyles =
        {
          sm: `height: 22px; padding: ${$iconOnly ? '0.125rem' : '0.125rem 0.5625rem'}; font-size: 0.75rem;`,
          md: `height: 24px; padding: ${$iconOnly ? '0.25rem' : '0.125rem 0.7937rem'}; font-size: 0.875rem;`,
          lg: `height: 28px; padding: ${$iconOnly ? '0.375rem' : '0.25rem 0.875rem'}; font-size: 0.875rem;`,
        }[$size] || '';

      return `
         ${getVariantStyles()}
        ${sizeStyles}
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-weight: ${theme.fontWeight.medium};
        border-radius: ${theme.radius[$radius]}px;
        gap:  0.25rem;
      `;
    }}
  }
`;
