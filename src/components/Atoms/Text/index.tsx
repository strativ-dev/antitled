import {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  ReactNode,
} from 'react';
import styled from 'styled-components';

import {
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

type PolymorphicTextProps<C extends ElementType = 'span'> = {
  variant?: TextVariant;
  color?: TextColorVariant | (string & {});
  children: ReactNode;
  as?: C;
  className?: string;
  style?: CSSProperties;
  margin?: string;
  padding?: string;
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
  ...props
}: PolymorphicTextProps<C>) => {
  const Component = as || 'span';
  const { size, weight, lineHeight } = parseVariant(variant);

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
      {...props}>
      {children}
    </Wrapper>
  );
};

type WrapperProps = {
  $size: TextSizeVariant;
  $weight: WeightVariant;
  $lineHeight: LineHeightVariant;
  $color: string;
  $margin?: string;
  $padding?: string;
};

const Wrapper = styled.span<WrapperProps>`
  font-size: ${({ $size, theme }) => theme.fontSize[$size]}px;
  font-weight: ${({ $weight, theme }) => theme.fontWeight[$weight]};
  line-height: ${({ $lineHeight, theme }) => theme.lineHeight[$lineHeight]}px;
  color: ${({ $color, theme }) =>
    theme.colors.texts[$color as TextColorVariant] ?? $color};
  margin: ${({ $margin }) => $margin};
  padding: ${({ $padding }) => $padding};
  display: inline-block;
  line-height: ${({ $size, theme }) => theme.lineHeight[$size]}px;
`;
