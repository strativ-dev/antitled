import {
  Progress as AntProgress,
  ProgressProps as AntProgressProps,
  Tooltip,
  TooltipProps,
} from 'antd';
import styled, { createGlobalStyle, useTheme } from 'styled-components';

export type ProgressSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
export type ProgressType = 'half-circle' | AntProgressProps['type'];

export interface CustomProgressProps
  extends Omit<AntProgressProps, 'size' | 'width' | 'type'> {
  type?: ProgressType;
  size?: ProgressSize;
  width?: string;
  color?: string;
  label?: string;
  tooltip?: boolean | string;
  positionBottom?: boolean;
  tooltipPlacement?: TooltipProps['placement'];
}

const FONT_SIZE_MAP = {
  xxs: '0.875rem',
  xs: '1.5rem',
  sm: '1.875rem',
  md: '2.25rem',
  lg: '3rem',
};

const LABEL_FONT_SIZE_MAP = {
  xxs: '0.75rem',
  xs: '0.75rem',
  sm: '0.75rem',
  md: '0.875rem',
  lg: '0.875rem',
};

const SIZE_MAP = {
  xxs: { circle: '4rem', border: '0.375rem' },
  xs: { circle: '10rem', border: '1rem' },
  sm: { circle: '12.5rem', border: '1.25rem' },
  md: { circle: '15rem', border: '1.5rem' },
  lg: { circle: '17.5rem', border: '1.75rem' },
};

const HALF_CIRCLE_LABEL_OFFSET = '-27px';

const calculateStrokeWidth = (borderRem: string, circleRem: string) =>
  (parseFloat(borderRem) / parseFloat(circleRem)) * 100;

export const Progress = ({
  type = 'line',
  size = 'md',
  width = '20rem',
  color,
  label,
  tooltip,
  positionBottom = false,
  tooltipPlacement = 'top',
  percent = 0,
  ...rest
}: CustomProgressProps) => {
  const theme = useTheme();
  const strokeColor = color || theme.colors.foregrounds.fgBrandPrimary600;

  const cfg = SIZE_MAP[size];
  const fontSize = FONT_SIZE_MAP[size];
  const labelFontSize = LABEL_FONT_SIZE_MAP[size];
  const strokeWidth = calculateStrokeWidth(cfg.border, cfg.circle);
  const isXxs = size === 'xxs';

  const tooltipContent =
    tooltip === true
      ? `${percent}%`
      : typeof tooltip === 'string'
        ? tooltip
        : null;

  const progressBar = (
    <StyledBar
      type='line'
      strokeColor={strokeColor}
      $positionBottom={positionBottom}
      percent={percent}
      {...rest}
    />
  );

  if (type === 'line') {
    return (
      <>
        <ProgressTooltipStyle />
        <LineProgressWrapper $width={width}>
          {tooltipContent ? (
            <Tooltip
              title={tooltipContent}
              open={true}
              placement={tooltipPlacement}
              classNames={{ root: 'custom-progress-tooltip' }}>
              {progressBar}
            </Tooltip>
          ) : (
            progressBar
          )}
        </LineProgressWrapper>
      </>
    );
  }

  if (type === 'half-circle') {
    return (
      <>
        <HalfCircleWrapper $size={cfg.circle} $isXxs={isXxs}>
          <HalfCircleContainer $size={cfg.circle}>
            <StyledHalfCircle
              type='dashboard'
              gapDegree={180}
              $size={cfg.circle}
              $fontSize={fontSize}
              strokeWidth={strokeWidth}
              strokeColor={strokeColor}
              percent={percent}
              showInfo={false}
              {...rest}
            />
            <HalfCircleContent $hasLabel={!!label}>
              {!isXxs && label && (
                <LabelText $fontSize={labelFontSize}>{label}</LabelText>
              )}
              <PercentageText $fontSize={fontSize}>{percent}%</PercentageText>
            </HalfCircleContent>
          </HalfCircleContainer>
          {isXxs && label && (
            <LabelText $fontSize={labelFontSize} $isXxsLabel>
              {label}
            </LabelText>
          )}
        </HalfCircleWrapper>
      </>
    );
  }

  return (
    <>
      <StyledCircleWrapper $size={cfg.circle} $isXxs={isXxs}>
        <CircleWrapper $size={cfg.circle}>
          <StyledCircle
            type='circle'
            $size={cfg.circle}
            $fontSize={fontSize}
            strokeWidth={strokeWidth}
            strokeColor={strokeColor}
            percent={percent}
            showInfo={false}
            {...rest}
          />
          <CenterContent $hasLabel={!!label}>
            {!isXxs && label && (
              <LabelText $fontSize={labelFontSize}>{label}</LabelText>
            )}
            <PercentageText $fontSize={fontSize}>{percent}%</PercentageText>
          </CenterContent>
        </CircleWrapper>
        {isXxs && label && (
          <LabelText $fontSize={labelFontSize}>{label}</LabelText>
        )}
      </StyledCircleWrapper>
    </>
  );
};

const HalfCircleContent = styled.div<{ $hasLabel: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  bottom: 50%;
  left: 50%;
  transform: translateX(-50%);
`;

const LineProgressWrapper = styled.div<{ $width: string }>`
  width: ${({ $width }) => $width};
`;

const StyledBar = styled(AntProgress)<{ $positionBottom?: boolean }>`
  .ant-progress-inner,
  .ant-progress-bg {
    height: 0.5rem !important;
    background-color: ${({ theme }) => theme.colors.backgrounds.bgQuaternary};
  }

  .ant-progress-text {
    ${({ $positionBottom }) =>
      $positionBottom
        ? `
          position: absolute;
          bottom: -1.5rem;
          right: 0;
        `
        : 'position: static;'}
    color: ${({ theme }) => theme.colors.texts.textSecondary700};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    font-size: ${({ theme }) => theme.fontSize['text-sm']};
  }
`;

const CenterContent = styled.div<{ $hasLabel: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PercentageText = styled.span<{ $fontSize: string }>`
  display: inline-block;
  line-height: 1;
  color: ${({ theme }) => theme.colors.texts.textPrimary900};
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;

const LabelText = styled.span<{ $fontSize: string; $isXxsLabel?: boolean }>`
  display: inline-block;
  color: ${({ theme }) => theme.colors.texts.textTertiary600};
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  ${({ $isXxsLabel }) =>
    $isXxsLabel && `margin-top: ${HALF_CIRCLE_LABEL_OFFSET};`}
`;

const ProgressTooltipStyle = createGlobalStyle`
  .custom-progress-tooltip .ant-tooltip-inner {
    background-color: ${({ theme }) => theme.colors.backgrounds.bgPrimaryAlt} !important;
    color: ${({ theme }) => theme.colors.texts.textSecondary700} !important;
    width: auto !important;
    height: auto !important;
    min-width: 2.6875rem !important;
    min-height: 2.125rem !important;
    padding: 0.5rem 0.75rem !important;
    text-align: center;
    font-weight: ${({ theme }) => theme.fontWeight.semibold} !important;
    font-size: ${({ theme }) => theme.fontSize['text-xs']} !important;
    border: 0.0625rem solid ${({ theme }) => theme.colors.borders.borderSecondaryAlt} !important;
  }

  .custom-progress-tooltip .ant-tooltip-arrow {
    display: none !important;
  }
`;

const StyledCircleWrapper = styled.div<{ $size: string; $isXxs: boolean }>`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

const CircleWrapper = styled.div<{ $size: string }>`
  position: relative;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCircle = styled(AntProgress)<{ $size: string; $fontSize: string }>`
  .ant-progress-inner {
    width: ${({ $size }) => $size} !important;
    height: ${({ $size }) => $size} !important;
  }

  .ant-progress-circle-trail {
    stroke: ${({ theme }) => theme.colors.backgrounds.bgQuaternary} !important;
  }

  .ant-progress-text {
    display: none !important;
  }
`;

const HalfCircleWrapper = styled.div<{ $size: string; $isXxs: boolean }>`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

const HalfCircleContainer = styled.div<{ $size: string }>`
  position: relative;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
`;

const StyledHalfCircle = styled(AntProgress)<{
  $size: string;
  $fontSize: string;
}>`
  .ant-progress-inner {
    width: ${({ $size }) => $size} !important;
    height: ${({ $size }) => $size} !important;
  }

  .ant-progress-circle-trail {
    stroke: ${({ theme }) => theme.colors.backgrounds.bgQuaternary} !important;
  }

  .ant-progress-text {
    display: none !important;
  }
`;
