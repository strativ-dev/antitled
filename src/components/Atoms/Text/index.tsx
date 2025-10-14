import {
  ReactNode,
  CSSProperties,
  ElementType,
  ComponentPropsWithoutRef,
} from 'react';
import styled from 'styled-components';

import {
  LineHeightVariant,
  TextColorVariant,
  TextVariant,
  WeightVariant,
} from '@/config/styles';

type PolymorphicTextProps<C extends ElementType = 'span'> = {
  size?: TextVariant;
  weight?: WeightVariant;
  lineHeight?: LineHeightVariant;
  color?: TextColorVariant;
  children: ReactNode;
  as?: C;
  className?: string;
  style?: CSSProperties;
  margin?: string;
  padding?: string;
} & ComponentPropsWithoutRef<C>;

export type TextProps = PolymorphicTextProps;

export const Text = <C extends ElementType = 'span'>({
  size = 'text-md',
  weight = 'regular',
  lineHeight,
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
  $size: TextVariant;
  $weight: WeightVariant;
  $lineHeight?: LineHeightVariant;
  $color: TextColorVariant;
  $margin?: string;
  $padding?: string;
};

const Wrapper = styled.span<WrapperProps>`
  font-size: ${({ $size, theme }) => theme.fontSize[$size]}px;
  font-weight: ${({ $weight, theme }) => theme.fontWeight[$weight]};
  color: ${({ $color, theme }) => theme.colors.texts[$color]};
  margin: ${({ $margin }) => $margin};
  padding: ${({ $padding }) => $padding};
  display: inline-block;
  line-height: ${({ $lineHeight, $size, theme }) =>
    $lineHeight ? theme.lineHeight[$lineHeight] : theme.lineHeight[$size]}px;
`;
