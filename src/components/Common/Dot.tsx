import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & {
  color?: string;
  size?: number;
};

export default function Dot({ color, size = 8, ...props }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 8 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <circle cx='4' cy='4' r='3' fill={color || '#717680'} />
    </svg>
  );
}
