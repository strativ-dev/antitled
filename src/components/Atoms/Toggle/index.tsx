import { Switch as AntSwitch } from 'antd';
import type { SwitchProps as AntSwitchProps } from 'antd/es/switch';
import { ReactNode } from 'react';
import styled, { css, DefaultTheme } from 'styled-components';

export type SwitchSize = 'xs' | 'sm' | 'md';
export type SwitchVariant = 'default' | 'slim';

export interface SwitchProps extends Omit<AntSwitchProps, 'size'> {
  size?: SwitchSize;
  variant?: SwitchVariant;
  children?: ReactNode;
  supportingText?: ReactNode;
}

const trackSizeMap = {
  default: {
    xs: { width: 1.75, height: 1 },
    sm: { width: 2.25, height: 1.25 },
    md: { width: 2.75, height: 1.5 },
  },
  slim: {
    xs: { width: 1.5, height: 0.75 },
    sm: { width: 2, height: 1 },
    md: { width: 2.5, height: 1.25 },
  },
} as const;

const innerSizeMap = {
  xs: { width: 0.75, height: 0.75 },
  sm: { width: 1, height: 1 },
  md: { width: 1.25, height: 1.25 },
} as const;

const getSwitchVariables = (
  theme: DefaultTheme,
  variant: SwitchVariant,
  size: SwitchSize
) => {
  const { width, height } = trackSizeMap[variant][size];
  const { width: innerWidth, height: innerHeight } = innerSizeMap[size];

  return css`
    --switch-width: ${width}rem;
    --switch-height: ${height}rem;
    --switch-handle-size: ${height - 0.25}rem;
    --switch-inner-width: ${innerWidth}rem;
    --switch-inner-height: ${innerHeight}rem;
    --switch-bg: ${theme.colors.backgrounds.bgTertiary};
    --switch-disabled-bg: ${theme.colors.backgrounds.bgDisabled};
    --switch-checked-bg: ${theme.colors.backgrounds.bgBrandSolid};
    --switch-inner-shadow: 0 0 0 0.125rem ${theme.colors.foregrounds.fgWhite};
    --switch-outer-shadow: 0 0 0 0.25rem ${theme.colors.effects.focusRing};
    --switch-handle-border-color: ${theme.colors.components.toggleBorder};
    --switch-border-color: ${theme.colors.borders.borderSecondary};
    --switch-checked-border: ${theme.colors.components.toggleSlimBorderPressed};
    --switch-disabled-border: ${theme.colors.borders.borderDisabledSubtle};
  `;
};

export function Switch({
  variant = 'default',
  size = 'md',
  children,
  supportingText,
  disabled,
  className,
  ...rest
}: SwitchProps) {
  return (
    <SwitchWrapper
      $variant={variant}
      $size={size}
      $disabled={disabled}
      className={className}>
      <StyledSwitch
        {...rest}
        disabled={disabled}
        $variant={variant}
        $size={size}
      />
      {(children || supportingText) && (
        <span className='switch-content'>
          {children && <span className='switch-label'>{children}</span>}
          {supportingText && (
            <span className='switch-supporting-text'>{supportingText}</span>
          )}
        </span>
      )}
    </SwitchWrapper>
  );
}

const SwitchWrapper = styled.label<{
  $variant: SwitchVariant;
  $size: SwitchSize;
  $disabled?: boolean;
}>`
  ${({ $variant, $size, $disabled, theme }) => css`
    ${getSwitchVariables(theme, $variant, $size)}

    display: inline-flex;
    align-items: flex-start;
    cursor: ${$disabled ? 'not-allowed' : 'pointer'};
    gap: 0.75rem;

    .switch-content {
      display: flex;
      flex-direction: column;
      margin-top: -0.125rem;
    }

    .switch-label {
      font-size: ${$size === 'xs'
        ? theme.fontSize['text-xs']
        : $size === 'sm'
          ? theme.fontSize['text-sm']
          : theme.fontSize['text-md']}px;
      font-weight: ${theme.fontWeight.medium};
      color: ${theme.colors.texts.textSecondary700};
    }

    .switch-supporting-text {
      font-size: ${$size === 'xs'
        ? theme.fontSize['text-xs']
        : $size === 'sm'
          ? theme.fontSize['text-sm']
          : theme.fontSize['text-md']}px;
      color: ${theme.colors.texts.textTertiary600};
      font-weight: ${theme.fontWeight.regular};
    }
  `}
`;

const StyledSwitch = styled(AntSwitch)<{
  $variant: SwitchVariant;
  $size: SwitchSize;
}>`
  ${({ $variant }) => css`
    width: var(--switch-width);
    height: var(--switch-height);
    min-width: var(--switch-width);
    border-radius: ${({ theme }) => theme.radius.full};
    background-color: var(--switch-bg);

    ${$variant === 'slim' &&
    css`
      border: 0.0625rem solid var(--switch-border-color);
    `}
    .ant-switch-handle {
      width: var(--switch-handle-size);
      height: var(--switch-handle-size);
      ${$variant === 'slim' &&
      css`
        width: var(--switch-height);
        height: var(--switch-height);
        inset-inline-start: 0;
      `}
      border-radius: 50%;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .ant-switch-handle::before {
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.foregrounds.fgWhite};
      border-radius: 50%;
      ${$variant === 'slim' &&
      css`
        border: 0.0625rem solid var(--switch-handle-border-color);
      `}
    }

    .ant-switch-inner {
      width: var(--switch-inner-width);
      height: var(--switch-inner-height);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &.ant-switch-checked {
      background-color: var(--switch-checked-bg);

      ${$variant === 'slim' &&
      css`
        border: transparent;
      `}

      .ant-switch-handle {
        inset-inline-start: calc(100% - var(--switch-handle-size) - 0.125rem);
        ${$variant === 'slim' &&
        css`
          inset-inline-start: calc(100% - var(--switch-height));
        `}
      }

      .ant-switch-handle::before {
        ${$variant === 'slim' &&
        css`
          border: 0.0625rem solid var(--switch-checked-border);
        `}
      }
    }
    &.ant-switch-checked:not(.ant-switch-disabled):hover {
      background-color: ${({ theme }) =>
        theme.colors.backgrounds.bgBrandSolidHover};
    }
    &:not(.ant-switch-checked):not(.ant-switch-disabled):hover {
      background-color: var(--switch-bg);
    }
    &:focus-visible {
      box-shadow: var(--switch-inner-shadow), var(--switch-outer-shadow);
    }

    &.ant-switch-disabled {
      background-color: var(--switch-disabled-bg);
      ${$variant === 'slim' &&
      css`
        border: 0.0625rem solid var(--switch-disabled-border);
      `}
      .ant-switch-handle::before {
        ${$variant === 'slim' &&
        css`
          border-color: var(--switch-handle-border-color);
        `}
      }
    }
  `}
`;
