import { Slider as AntSlider, SliderSingleProps as AntSliderProps } from 'antd';
import { SliderRangeProps } from 'antd/es/slider';
import { CSSProperties } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

type CommonSliderProps = {
  width?: string;
  margin?: string;
  padding?: string;
  style?: CSSProperties;
  className?: string;
};

export type SliderProps = (AntSliderProps | SliderRangeProps) &
  CommonSliderProps;

export const Slider = ({
  width = '100%',
  margin = '0rem',
  padding = '0rem',
  style,
  className,
  ...props
}: SliderProps) => {
  return (
    <Wrapper
      $width={width}
      $margin={margin}
      $padding={padding}
      className={className}
      style={style}>
      <SliderTooltipStyle />
      <StyledSlider
        {...props}
        tooltip={{
          overlayClassName: 'custom-slider-tooltip',
          ...props.tooltip,
        }}
      />
    </Wrapper>
  );
};
const SliderTooltipStyle = createGlobalStyle`
  .custom-slider-tooltip .ant-tooltip-inner {
    background-color: ${({ theme }) => theme.colors.foregrounds.fgWhite} !important;
    color:  ${({ theme }) => theme.colors.texts.textSecondary700}  !important;
    width: auto !important;
    height: auto !important;
    min-width: 2.6875rem !important;
    min-height: 2.125rem !important;
    padding: 0.5rem 0.75rem!important;
    text-align: center;
    font-weight:${({ theme }) => theme.fontWeight.semibold} !important;
    font-size: ${({ theme }) => theme.fontSize['text-xs']} !important;
    border: 0.0625rem solid ${({ theme }) => theme.colors.borders.borderSecondaryAlt} !important;

  }
 
  .custom-slider-tooltip .ant-tooltip-arrow {
    display: none !important;
  }

`;
const Wrapper = styled.div<{
  $width: string;
  $margin: string;
  $padding: string;
}>`
  width: ${({ $width }) => $width};
  margin: ${({ $margin }) => $margin};
  padding: ${({ $padding }) => $padding};

  .ant-slider {
    &-rail {
      background-color: ${({ theme }) => theme.colors.backgrounds.bgQuaternary};
      height: 0.375rem;
      border-radius: ${({ theme }) => theme.radius.md};
    }
    &-mark-text-active {
      color: ${({ theme }) => theme.colors.texts.textPrimary900};
      margin-top: 0.5rem;
      font-weight: ${({ theme }) => theme.fontWeight.medium} !important;
      font-size: ${({ theme }) => theme.fontSize['text-md']} !important;
    }
    &-track {
      height: 0.375rem;
      border-radius: ${({ theme }) => theme.radius.md};
      background-color: ${({ theme }) =>
        theme.colors.foregrounds.fgBrandPrimary600};
    }
    &-dot {
      width: 0.625rem;
      height: 0.625rem;
      border-color: ${({ theme }) =>
        theme.colors.components.sliderHandleBorder};
    }
    &-handle {
      width: 1.5rem;
      height: 1.5rem;
      margin-top: -0.375rem;
      border-radius: 50%;
      border: 0.125rem solid
        ${({ theme }) => theme.colors.components.sliderHandleBorder};
      background-color: ${({ theme }) =>
        theme.colors.components.sliderHandleBg};
      opacity: 1;
      &:hover {
        border: 0.125rem solid
          ${({ theme }) => theme.colors.components.sliderHandleBorder} !important;
        background-color: ${({ theme }) =>
          theme.colors.components.sliderHandleBg} !important;
      }

      &:focus-visible {
        box-shadow:
          0 0 0 0.125rem ${({ theme }) => theme.colors.foregrounds.fgWhite},
          0 0 0 0.25rem ${({ theme }) => theme.colors.effects.focusRing};
      }
    }
  }
`;

const StyledSlider = styled(AntSlider)`
  .ant-slider-handle::after {
    display: none;
  }
`;

export default Slider;
