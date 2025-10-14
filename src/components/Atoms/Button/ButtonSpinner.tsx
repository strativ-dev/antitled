import styled, { DefaultTheme } from 'styled-components';

import { ExtendedColor } from '@/components/Atoms/Button';

const getColor = (theme: DefaultTheme, color?: ExtendedColor) => {
  switch (color) {
    case 'primary':
      return theme.colors.Brand['300'];
    case 'destructive':
    case 'danger':
      return theme.colors.Error['300'];
    case 'success':
    case 'green':
      return theme.colors.Success['300'];
    case 'warning':
    case 'orange':
      return theme.colors.Warning['300'];
    case 'info':
    case 'blue':
      return theme.colors.Blue['300'];
    //add other cases if needed
    case 'default':
    default:
      return theme.colors.foregrounds['fgQuaternary400'];
  }
};

export const ButtonSpinner = styled.div<{
  $size?: number;
  $strokeWidth?: number;
  $color?: ExtendedColor;
}>`
  width: ${({ $size }) => ($size ? $size : 20)}px;
  height: ${({ $size }) => ($size ? $size : 20)}px;
  border: ${({ $strokeWidth }) => ($strokeWidth ? $strokeWidth : 2)}px solid;
  border-color: ${({ theme, $color }) => `${getColor(theme, $color)}33`};
  border-bottom-color: ${({ $color, theme }) => getColor(theme, $color)};
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
