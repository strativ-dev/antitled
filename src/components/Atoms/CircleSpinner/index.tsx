import styled from 'styled-components';

type Props = {
  size?: number;
  strokeWidth?: number;
  color?: string;
};

export const CircleSpinner = ({
  size,
  strokeWidth,
  color = '#A4A7AE',
}: Props) => {
  return (
    <StyledSpinner $color={color} $size={size} $strokeWidth={strokeWidth} />
  );
};

const StyledSpinner = styled.div<{
  $size?: number;
  $strokeWidth?: number;
  $color?: string;
}>`
  width: ${({ $size }) => ($size ? $size : 20)}px;
  height: ${({ $size }) => ($size ? $size : 20)}px;
  border: ${({ $strokeWidth }) => ($strokeWidth ? $strokeWidth : 2)}px solid;
  border-color: ${({ $color }) => `${$color}33`};
  border-bottom-color: ${({ $color }) => $color};
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
