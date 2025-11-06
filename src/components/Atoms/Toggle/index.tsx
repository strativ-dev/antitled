import { Switch as AntSwitch } from 'antd';
import type { SwitchProps as AntSwitchProps } from 'antd/es/switch';
import { ReactNode } from 'react';
import styled, { css, DefaultTheme } from 'styled-components';

export type ToggleSize = 'xs' | 'sm' | 'md';
export type ToggleVariant = 'default' | 'slim';

export interface ToggleProps extends Omit<AntSwitchProps, 'size'> {
  size?: ToggleSize;
  variant?: ToggleVariant;
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

const getToggleVariables = (
  theme: DefaultTheme,
  variant: ToggleVariant,
  size: ToggleSize
) => {
  const { width, height } = trackSizeMap[variant][size];
  const { width: innerWidth, height: innerHeight } = innerSizeMap[size];

  return css`
    --toggle-width: ${width}rem;
    --toggle-height: ${height}rem;
    --toggle-handle-size: ${height - 0.25}rem;
    --toggle-inner-width: ${innerWidth}rem;
    --toggle-inner-height: ${innerHeight}rem;
    --toggle-bg: ${theme.colors.backgrounds.bgTertiary};
    --toggle-disabled-bg: ${theme.colors.backgrounds.bgDisabled};
    --toggle-checked-bg: ${theme.colors.backgrounds.bgBrandSolid};
    --toggle-inner-shadow: 0 0 0 0.125rem ${theme.colors.foregrounds.fgWhite};
    --toggle-outer-shadow: 0 0 0 0.25rem ${theme.colors.effects.focusRing};
    --toggle-handle-border-color: ${theme.colors.components.toggleBorder};
    --toggle-border-color: ${theme.colors.borders.borderSecondary};
    --toggle-checked-border: ${theme.colors.components.toggleSlimBorderPressed};
    --toggle-disabled-border: ${theme.colors.borders.borderDisabledSubtle};
  `;
};

export function Toggle({
  variant = 'default',
  size = 'md',
  children,
  supportingText,
  disabled,
  className,
  ...rest
}: ToggleProps) {
  return (
    <ToggleWrapper
      $variant={variant}
      $size={size}
      $disabled={disabled}
      className={className}>
      <StyledToggle
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
    </ToggleWrapper>
  );
}

const ToggleWrapper = styled.label<{
  $variant: ToggleVariant;
  $size: ToggleSize;
  $disabled?: boolean;
}>`
  ${({ $variant, $size, $disabled, theme }) => css`
    ${getToggleVariables(theme, $variant, $size)}

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

const StyledToggle = styled(AntSwitch)<{
  $variant: ToggleVariant;
  $size: ToggleSize;
}>`
  ${({ $variant }) => css`
    width: var(--toggle-width);
    height: var(--toggle-height);
    min-width: var(--toggle-width);
    border-radius: ${({ theme }) => theme.radius.full};
    background-color: var(--toggle-bg);

    ${$variant === 'slim' &&
    css`
      border: 0.0625rem solid var(--toggle-border-color);
    `}
    .ant-switch-handle {
      width: var(--toggle-handle-size);
      height: var(--toggle-handle-size);
      ${$variant === 'slim' &&
      css`
        width: var(--toggle-height);
        height: var(--toggle-height);
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
        border: 0.0625rem solid var(--toggle-handle-border-color);
      `}
    }

    .ant-switch-inner {
      width: var(--toggle-inner-width);
      height: var(--toggle-inner-height);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &.ant-switch-checked {
      background-color: var(--toggle-checked-bg);

      ${$variant === 'slim' &&
      css`
        border: transparent;
      `}

      .ant-switch-handle {
        inset-inline-start: calc(100% - var(--toggle-handle-size) - 0.125rem);
        ${$variant === 'slim' &&
        css`
          inset-inline-start: calc(100% - var(--toggle-height));
        `}
      }

      .ant-switch-handle::before {
        ${$variant === 'slim' &&
        css`
          border: 0.0625rem solid var(--toggle-checked-border);
        `}
      }
    }
    &.ant-switch-checked:not(.ant-switch-disabled):hover {
      background-color: ${({ theme }) =>
        theme.colors.backgrounds.bgBrandSolidHover};
    }
    &:not(.ant-switch-checked):not(.ant-switch-disabled):hover {
      background-color: var(--toggle-bg);
    }
    &:focus-visible {
      box-shadow: var(--toggle-inner-shadow), var(--toggle-outer-shadow);
    }

    &.ant-switch-disabled {
      background-color: var(--toggle-disabled-bg);
      ${$variant === 'slim' &&
      css`
        border: 0.0625rem solid var(--toggle-disabled-border);
      `}
      .ant-switch-handle::before {
        ${$variant === 'slim' &&
        css`
          border-color: var(--toggle-handle-border-color);
        `}
      }
    }
  `}
`;
