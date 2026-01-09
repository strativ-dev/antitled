import {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  ReactNode,
} from 'react';
import styled from 'styled-components';

import {
  Breakpoint,
  LineHeightVariant,
  TextColorVariant,
  TextSizeVariant,
  TextVariant,
  WeightVariant,
} from '@/config/styles';

/**
 * Parse variant string like 'text-md-semibold' into size and weight
 */
const parseVariant = (
  variant: TextVariant
): {
  size: TextSizeVariant;
  weight: WeightVariant;
  lineHeight: LineHeightVariant;
} => {
  // Split from the last hyphen to get weight
  const lastHyphenIndex = variant.lastIndexOf('-');
  const size = variant.slice(0, lastHyphenIndex) as TextSizeVariant;
  const weight = variant.slice(lastHyphenIndex + 1) as WeightVariant;
  const lineHeight = variant.slice(0, lastHyphenIndex) as LineHeightVariant;
  return { size, weight, lineHeight };
};

// Utility type to allow autocomplete for specific values while accepting any string
type LooseAutocomplete<T extends string> = T | Omit<string, T>;

type PolymorphicTextProps<C extends ElementType = 'span'> = {
  variant?: TextVariant;
  color?: LooseAutocomplete<TextColorVariant>;
  children: ReactNode;
  as?: C;
  className?: string;
  style?: CSSProperties;
  margin?: string;
  padding?: string;
  // Responsive variants
  smallMobile?: TextVariant;
  mobile?: TextVariant;
  tablet?: TextVariant;
  laptop?: TextVariant;
  desktop?: TextVariant;
} & ComponentPropsWithoutRef<C>;

export type TextProps = PolymorphicTextProps;

export const Text = <C extends ElementType = 'span'>({
  variant = 'text-md-regular',
  color = 'textPrimary900',
  children,
  as,
  className,
  style,
  margin = '0px 0px',
  padding = '0px 0px',
  onClick,
  smallMobile,
  mobile,
  tablet,
  laptop,
  desktop,
  ...props
}: PolymorphicTextProps<C>) => {
  const Component = as || 'span';
  const { size, weight, lineHeight } = parseVariant(variant);

  // Parse responsive variants
  const smallMobileVariant = smallMobile
    ? parseVariant(smallMobile)
    : undefined;
  const mobileVariant = mobile ? parseVariant(mobile) : undefined;
  const tabletVariant = tablet ? parseVariant(tablet) : undefined;
  const laptopVariant = laptop ? parseVariant(laptop) : undefined;
  const desktopVariant = desktop ? parseVariant(desktop) : undefined;

  return (
    <Wrapper
      as={Component}
      $size={size}
      $weight={weight}
      $lineHeight={lineHeight}
      $color={color}
      className={className}
      style={style}
      onClick={onClick}
      $margin={margin}
      $padding={padding}
      $smallMobile={smallMobileVariant}
      $mobile={mobileVariant}
      $tablet={tabletVariant}
      $laptop={laptopVariant}
      $desktop={desktopVariant}
      {...props}>
      {children}
    </Wrapper>
  );
};

type ResponsiveVariant = {
  size: TextSizeVariant;
  weight: WeightVariant;
  lineHeight: LineHeightVariant;
};

type WrapperProps = {
  $size: TextSizeVariant;
  $weight: WeightVariant;
  $lineHeight: LineHeightVariant;
  $color: LooseAutocomplete<TextColorVariant>;
  $margin?: string;
  $padding?: string;
  $smallMobile?: ResponsiveVariant;
  $mobile?: ResponsiveVariant;
  $tablet?: ResponsiveVariant;
  $laptop?: ResponsiveVariant;
  $desktop?: ResponsiveVariant;
};

const Wrapper = styled.span<WrapperProps>`
  font-size: ${({ $size, theme }) => theme.fontSize[$size]};
  font-weight: ${({ $weight, theme }) => theme.fontWeight[$weight]};
  line-height: ${({ $lineHeight, theme }) => theme.lineHeight[$lineHeight]};
  color: ${({ $color, theme }) =>
    theme.colors.texts[$color as TextColorVariant] ?? $color};
  margin: ${({ $margin }) => $margin};
  padding: ${({ $padding }) => $padding};
  /* display: inline-block; */

  ${({ $smallMobile, theme }) =>
    $smallMobile &&
    `
    ${Breakpoint.smallMobile} {
      font-size: ${theme.fontSize[$smallMobile.size]};
      font-weight: ${theme.fontWeight[$smallMobile.weight]};
      line-height: ${theme.lineHeight[$smallMobile.lineHeight]};
    }
  `}

  ${({ $mobile, theme }) =>
    $mobile &&
    `
    ${Breakpoint.mobile} {
      font-size: ${theme.fontSize[$mobile.size]};
      font-weight: ${theme.fontWeight[$mobile.weight]};
      line-height: ${theme.lineHeight[$mobile.lineHeight]};
    }
  `}

  ${({ $tablet, theme }) =>
    $tablet &&
    `
    ${Breakpoint.tablet} {
      font-size: ${theme.fontSize[$tablet.size]};
      font-weight: ${theme.fontWeight[$tablet.weight]};
      line-height: ${theme.lineHeight[$tablet.lineHeight]};
    }
  `}

  ${({ $laptop, theme }) =>
    $laptop &&
    `
    ${Breakpoint.laptop} {
      font-size: ${theme.fontSize[$laptop.size]};
      font-weight: ${theme.fontWeight[$laptop.weight]};
      line-height: ${theme.lineHeight[$laptop.lineHeight]};
    }
  `}

  ${({ $desktop, theme }) =>
    $desktop &&
    `
    ${Breakpoint.desktop} {
      font-size: ${theme.fontSize[$desktop.size]};
      font-weight: ${theme.fontWeight[$desktop.weight]};
      line-height: ${theme.lineHeight[$desktop.lineHeight]};
    }
  `}
`;
