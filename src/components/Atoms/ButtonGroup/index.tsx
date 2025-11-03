import { Radio } from 'antd';
import type { RadioChangeEvent, RadioGroupProps } from 'antd';
import React from 'react';
import styled, { css, DefaultTheme } from 'styled-components';

type ButtonGroupVariant = 'default' | 'primary';

export interface ButtonOption {
  value: string;
  label?: string;
  icon?: React.ReactNode;
  iconColor?: string;
}

export interface ButtonGroupProps
  extends Omit<RadioGroupProps, 'buttonStyle' | 'onChange' | 'options'> {
  value?: string;
  onChange?: (e: RadioChangeEvent) => void;
  options?: ButtonOption[];
  variant?: ButtonGroupVariant;
}

const getButtonGroupVariables = (theme: DefaultTheme) => css`
  --button-group-bg-primary-border-color: ${theme.colors.backgrounds
    .bgBrandSolid};
  --button-group-bg: ${theme.colors.backgrounds.bgPrimary};
  --button-group-bg-checked: ${theme.colors.backgrounds.bgActive};
  --button-group-bg-hover: ${theme.colors.backgrounds.bgPrimaryHover};
  --button-group-disabled-bg: ${theme.colors.backgrounds.bgDisabledSubtle};
  --button-group-disabled-border-color: ${theme.colors.borders.borderPrimary};
  --button-group-disabled-text-color: ${theme.colors.texts.textDisabled};
  --button-group-checked-bg-border-color: ${theme.colors.backgrounds
    .bgBrandSolid};
  --button-group-border-color: ${theme.colors.borders.borderPrimary};
  --button-group-text-color: ${theme.colors.texts.textSecondary700};
  --button-group-text-hover-color: ${theme.colors.texts.textSecondaryHover};
  --button-group-checked-border: ${theme.colors.components
    .toggleSlimBorderPressed};
  --button-group-disabled-border: ${theme.colors.borders.borderDisabledSubtle};
  --button-group-inner-shadow: 0 0 0 0.125rem
    ${theme.colors.foregrounds.fgWhite};
  --button-group-outer-shadow: 0 0 0 0.25rem ${theme.colors.effects.focusRing};
  --button-group-icon-color: ${theme.colors.foregrounds.fgQuaternary400};
  --button-group-icon-color-hover: ${theme.colors.foregrounds
    .fgQuaternaryHover};
  --button-group-outline: 0px 1px 2px 0px rgba(10, 13, 18, 0.05),
    0px -2px 0px 0px rgba(10, 13, 18, 0.05) inset,
    0px 0px 0px 1px rgba(10, 13, 18, 0.18) inset;
  --button-group-outline-primary: 0px 1px 2px 0px rgba(127, 86, 217, 0.05),
    0px -2px 0px 0px rgba(127, 86, 217, 0.05) inset,
    0px 0px 0px 1px rgba(127, 86, 217, 0.18) inset;
`;

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  value,
  onChange,
  options = [],
  variant = 'default',
  ...rest
}) => (
  <StyledGroup value={value} onChange={onChange} {...rest} $variant={variant}>
    {options.map((opt) => (
      <StyledButton
        key={opt.value}
        value={opt.value}
        $variant={variant}
        $hasIcon={!!opt.icon}
        $hasLabel={!!opt.label}>
        {opt.icon && <IconWrapper>{opt.icon}</IconWrapper>}
        {opt.label && <LabelWrapper>{opt.label}</LabelWrapper>}
      </StyledButton>
    ))}
  </StyledGroup>
);

const StyledGroup = styled(Radio.Group)<{ $variant: ButtonGroupVariant }>`
  ${({ theme }) => getButtonGroupVariables(theme)};
  display: inline-flex;
  border-radius: ${({ theme }) => theme.radius.md};
`;

const StyledButton = styled(Radio.Button)<{
  $variant: ButtonGroupVariant;
  $hasIcon?: boolean;
  $hasLabel?: boolean;
}>`
  && {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${({ $hasIcon, $hasLabel }) =>
      $hasIcon && !$hasLabel ? '0.625rem 0.75rem' : '0.625rem 1rem'};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    font-size: ${({ theme }) => theme.fontSize['text-sm']}px;
    color: var(--button-group-text-color) !important;
    background-color: var(--button-group-bg) !important;
    border-width: ${({ theme }) => (theme.mode === 'dark' ? '0.0625rem' : '0')};
    box-shadow: var(--button-group-outline);
    gap: ${({ $hasIcon, $hasLabel }) =>
      $hasIcon && $hasLabel ? '0.375rem' : '0'};
  }

  & > span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${({ $hasIcon, $hasLabel }) =>
      $hasIcon && $hasLabel ? '0.375rem' : '0'};
  }

  &:not(:first-child) {
    margin-left: -0.0625rem;
  }

  &.ant-radio-button-wrapper:not(:first-child)::before {
    height: auto;
  }

  &.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    background: var(--button-group-bg-checked) !important;
    color: var(--button-group-text-hover-color) !important;

    ${({ $variant }) =>
      $variant === 'primary' &&
      `  border: 1px solid var(--button-group-bg-primary-border-color) !important;
          box-shadow: none !important;

    `}
  }

  &.ant-radio-button-wrapper-checked:not(
      .ant-radio-button-wrapper-disabled
    )::before {
    background-color: transparent !important;
  }

  &:hover:not(.ant-radio-button-wrapper-disabled) {
    background: var(--button-group-bg-hover) !important;
    color: var(--button-group-text-hover-color) !important;
  }

  input:focus-visible + & {
    box-shadow: var(--button-group-inner-shadow),
      var(--button-group-outer-shadow);
  }

  &.ant-radio-button-wrapper-disabled {
    background-color: var(--button-group-disabled-bg) !important;
    color: var(--button-group-disabled-text-color) !important;
  }
`;

const IconWrapper = styled.span<{ color?: string; size?: string | number }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => (size ? size : 'auto')};
  height: ${({ size }) => (size ? size : 'auto')};
  max-width: 1.25rem;
  max-height: 1.25rem;
  color: ${({ color }) => color || 'var(--button-group-icon-color)'};
  transition: color 0.2s ease;

  svg {
    width: 100%;
    height: 100%;
  }
  .ant-radio-button-wrapper:hover:not(.ant-radio-button-wrapper-disabled) & {
    color: var(--button-group-icon-color-hover);
  }
`;

const LabelWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
