import styled, { DefaultTheme } from 'styled-components';

import {
  ExtendedColor,
  ExtendedVariant,
  TagProps,
  TagShape,
  TagSize,
} from './index';

export const getTagColor = (
  theme: DefaultTheme,
  color?: ExtendedColor
): { bg: string; text: string; border: string } => {
  switch (color) {
    case 'primary':
      return {
        bg: theme.colors.backgrounds.bgPrimary,
        text: theme.colors.texts.textSecondary700,
        border: theme.colors.borders.borderPrimary,
      };
    case 'brand':
      return {
        bg: theme.colors.utility['brand-50'],
        text: theme.colors.utility['brand-700'],
        border: theme.colors.utility['brand-200'],
      };
    case 'success':
      return {
        bg: theme.colors.utility['success-50'],
        text: theme.colors.utility['success-700'],
        border: theme.colors.utility['success-200'],
      };
    case 'warning':
      return {
        bg: theme.colors.utility['warning-50'],
        text: theme.colors.utility['warning-700'],
        border: theme.colors.utility['warning-200'],
      };
    case 'error':
      return {
        bg: theme.colors.utility['error-50'],
        text: theme.colors.utility['error-700'],
        border: theme.colors.utility['error-200'],
      };
    case 'gray':
      return {
        bg: theme.colors.utility['gray-50'],
        text: theme.colors.utility['gray-700'],
        border: theme.colors.utility['gray-200'],
      };
    case 'gray-blue':
      return {
        bg: theme.colors.utility['grayblue-50'],
        text: theme.colors.utility['grayblue-700'],
        border: theme.colors.utility['grayblue-200'],
      };
    case 'blue-light':
      return {
        bg: theme.colors.utility['bluelight-50'],
        text: theme.colors.utility['bluelight-700'],
        border: theme.colors.utility['bluelight-200'],
      };
    case 'blue':
      return {
        bg: theme.colors.utility['blue-50'],
        text: theme.colors.utility['blue-700'],
        border: theme.colors.utility['blue-200'],
      };
    case 'indigo':
      return {
        bg: theme.colors.utility['indigo-50'],
        text: theme.colors.utility['indigo-700'],
        border: theme.colors.utility['indigo-200'],
      };
    case 'purple':
      return {
        bg: theme.colors.utility['purple-50'],
        text: theme.colors.utility['purple-700'],
        border: theme.colors.utility['purple-200'],
      };
    case 'pink':
      return {
        bg: theme.colors.utility['pink-50'],
        text: theme.colors.utility['pink-700'],
        border: theme.colors.utility['pink-200'],
      };
    case 'orange':
      return {
        bg: theme.colors.utility['orange-50'],
        text: theme.colors.utility['orange-700'],
        border: theme.colors.utility['orange-200'],
      };
    default:
      return getTagColor(theme, 'gray');
  }
};

export const getRadiusFromShape = (shape: TagShape, size: TagSize): string =>
  shape === 'pill' ? 'full' : size === 'lg' ? 'md' : 'sm';

const ICON_ONLY_SIZES = (theme: DefaultTheme): Record<TagSize, string> => ({
  sm: `
    height: 1.375rem;
    width: 1.375rem;
    padding: 0.3125rem;
    font-size: ${theme.fontSize['text-xs']};  `,
  md: `
    height: 1.5rem;
    width: 1.5rem;
    padding: 0.375rem;
    font-size: ${theme.fontSize['text-sm']};  `,
  lg: `
    height: 1.75rem;
    width: 1.75rem;
    padding: 0.5rem;
    font-size: ${theme.fontSize['text-sm']};  `,
});

const LABEL_ONLY_SIZES = (theme: DefaultTheme): Record<TagSize, string> => ({
  sm: `
    height: 1.375rem;
    padding: 0 0.5rem;
    font-size: ${theme.fontSize['text-xs']};  `,
  md: `
    height: 1.5rem;
    padding: 0 0.625rem;
    font-size: ${theme.fontSize['text-sm']};  `,
  lg: `
    height: 1.75rem;
    padding: 0 0.875rem;
    font-size: ${theme.fontSize['text-sm']};  `,
});

const ICON_LABEL_SIZES = (theme: DefaultTheme): Record<TagSize, string> => ({
  sm: `
    height: 1.375rem;
    padding-left: 0.5rem;
    padding-right: 0.375rem;
    gap: 0.25rem;
    font-size: ${theme.fontSize['text-xs']};  `,
  md: `
    height: 1.5rem;
    padding-left: 0.625rem;
    padding-right: 0.5rem;
    gap: 0.375rem;
    font-size: ${theme.fontSize['text-sm']};  `,
  lg: `
    height: 1.75rem;
    padding-left: 0.75rem;
    padding-right: 0.625rem;
    gap: 0.375rem;
    font-size: ${theme.fontSize['text-sm']};  `,
});

export const TagWrapper = styled.div<{
  $size?: TagProps['size'];
  $color?: ExtendedColor;
  $shape?: TagShape;
  $variant?: ExtendedVariant;
  $bordered?: boolean;
  $iconOnly?: boolean;
  $labelOnly?: boolean;
}>`
  display: inline-flex;
  align-items: center;

  && .ant-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    ${({
      theme,
      $color = 'gray',
      $variant = 'solid',
      $bordered = true,
      $shape = 'pill',
      $size = 'md',
      $iconOnly,
      $labelOnly,
    }) => {
      const { bg, text, border } = getTagColor(theme, $color);
      const radius = getRadiusFromShape($shape, $size);
      const radiusValue = theme.radius[radius as keyof typeof theme.radius];

      const getVariantStyles = () =>
        $variant === 'outlined'
          ? `background-color: transparent; color: ${text}; border: ${$bordered ? `0.0625rem solid ${border}` : 'none'};`
          : `background-color: ${bg}; color: ${text}; border: ${$bordered ? `0.0625rem solid ${border}` : 'none'};`;

      const sizeStyles = $iconOnly
        ? ICON_ONLY_SIZES(theme)[$size]
        : $labelOnly
          ? LABEL_ONLY_SIZES(theme)[$size]
          : ICON_LABEL_SIZES(theme)[$size];

      return `
      ${getVariantStyles()}
      ${sizeStyles}
      font-weight: ${theme.fontWeight.medium};
      border-radius: ${radiusValue};
      gap: 0.25rem;
    `;
    }}
  }
`;
