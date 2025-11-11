import { SVGProps } from 'react';
import { useTheme } from 'styled-components';

import { AvatarSize, AvatarStatus } from './types';

export const getSize = (size?: AvatarSize): number => {
  if (typeof size === 'number') {
    return size;
  }

  switch (size) {
    case 'xs':
      return 24;
    case 'sm':
      return 32;
    case 'md':
      return 40;
    case 'lg':
      return 48;
    case 'xl':
      return 56;
    case '2xl':
      return 64;
    default:
      return 40;
  }
};

export const getGroupAvatarTextSize = (
  size?: number
): 'text-xs' | 'text-sm' | 'text-md' => {
  if (!size) return 'text-sm';

  if (size <= 30) {
    return 'text-xs';
  } else if (size <= 40) {
    return 'text-sm';
  } else {
    return 'text-md';
  }
};

type StatusDotProps = {
  status: AvatarStatus;
  size?: number;
};

export const StatusDot = ({ status, size = 12.5 }: StatusDotProps) => {
  const { colors } = useTheme();

  const getColor = () => {
    switch (status) {
      case 'online':
        return colors.foregrounds.fgSuccessSecondary;
      case 'offline':
        return colors.foregrounds.fgDisabled;
      case 'busy':
        return colors.foregrounds.fgErrorSecondary;
      case 'away':
        return colors.foregrounds.fgWarningSecondary;
      case 'none':
      default:
        return colors.foregrounds.fgDisabled;
    }
  };

  return <Dot size={size} color={getColor()} />;
};

type StatusBadgeProps = SVGProps<SVGSVGElement> & {
  size?: number;
  color: string;
};

export const Dot = ({ color, size = 13, ...props }: StatusBadgeProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 13 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M6.5 0.75C9.67564 0.75 12.25 3.32436 12.25 6.5C12.25 9.67564 9.67564 12.25 6.5 12.25C3.32436 12.25 0.75 9.67564 0.75 6.5C0.75 3.32436 3.32436 0.75 6.5 0.75Z'
        fill={color}
      />
      <path
        d='M6.5 0.75C9.67564 0.75 12.25 3.32436 12.25 6.5C12.25 9.67564 9.67564 12.25 6.5 12.25C3.32436 12.25 0.75 9.67564 0.75 6.5C0.75 3.32436 3.32436 0.75 6.5 0.75Z'
        stroke='white'
        strokeWidth='1.5'
      />
    </svg>
  );
};
