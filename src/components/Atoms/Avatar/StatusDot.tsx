import { SVGProps } from 'react';
import { useTheme } from 'styled-components';

import { AvatarStatus } from '@/components/Atoms/Avatar/types';

type StatusDotProps = {
  status: AvatarStatus;
  size?: number;
};

type StatusBadgeProps = SVGProps<SVGSVGElement> & {
  size?: number;
  color: string;
};

const Dot = ({ color, size = 13, ...props }: StatusBadgeProps) => {
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

export default function StatusDot({ status, size = 12.5 }: StatusDotProps) {
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
}
