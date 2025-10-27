import { Checkbox as AntCheckbox, ConfigProvider } from 'antd';
import type { CheckboxProps as AntdCheckboxProps } from 'antd/es/checkbox';
import type { CheckboxGroupProps as AntdCheckboxGroupProps } from 'antd/es/checkbox/Group';
import clsx from 'clsx';
import { useContext, ReactNode } from 'react';
import styled, { DefaultTheme, css } from 'styled-components';

type ExtendedColor = 'brand' | 'gray';
export type CheckboxSize = 'sm' | 'md';
export type CheckboxType = 'checkbox' | 'radio';

export type CheckboxProps = Omit<AntdCheckboxProps, 'size'> & {
  size?: CheckboxSize;
  color?: ExtendedColor;
  type?: CheckboxType;
  supportingText?: ReactNode;
  children?: ReactNode;
};

export type CheckboxGroupProps = Omit<AntdCheckboxGroupProps, 'size'> & {
  size?: CheckboxSize;
  color?: ExtendedColor;
  children?: ReactNode;
};

const getCheckboxColor = (theme: DefaultTheme, color?: ExtendedColor) => {
  switch (color) {
    case 'brand':
      return theme.colors.backgrounds.bgBrandSolid;
    case 'gray':
      return theme.colors.borders.borderDisabled;
    default:
      return theme.colors.backgrounds.bgBrandSolid;
  }
};

const getCheckboxSize = (size?: CheckboxSize) => {
  const map: Record<CheckboxSize, { size: string }> = {
    sm: { size: '1rem' },
    md: { size: '1.25rem' },
  };
  return size ? map[size] : map.md;
};

const getCheckboxVariables = (
  theme: DefaultTheme,
  size?: CheckboxSize,
  color?: ExtendedColor
) => {
  const sizes = getCheckboxSize(size);
  const primaryColor = getCheckboxColor(theme, color);

  return css`
    --checkbox-size: ${sizes.size};
    --checkbox-color: ${primaryColor};
    --checkbox-border-color: ${theme.colors.borders.borderPrimary};
    --checkbox-disabled-bg: ${theme.colors.backgrounds.bgDisabledSubtle};
    --checkbox-disabled-border: ${theme.colors.borders.borderDisabled};
    --focus-ring-color: ${theme.colors.effects.focusRing};
    --text-secondary: ${theme.colors.texts.textSecondary700};
    --text-tertiary: ${theme.colors.texts.textTertiary600};
    --checkbox-checked-bg: ${theme.colors.foregrounds.fgWhite};
    --checkbox-inner-shadow: 0 0 0 2px var(--checkbox-checked-bg);
    --checkbox-outer-shadow: 0 0 0 4px var(--focus-ring-color);
  `;
};

export function CheckboxBase(props: CheckboxProps) {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('checkbox');

  const {
    className,
    size = 'md',
    color = 'brand',
    type = 'checkbox',
    children,
    indeterminate,
    disabled,
    supportingText,
    ...rest
  } = props;

  const wrapperClass =
    type === 'radio'
      ? `${getPrefixCls('radio')}-wrapper`
      : `${prefixCls}-wrapper`;

  return (
    <CheckboxWrapper
      $size={size}
      $color={color}
      $type={type}
      $disabled={disabled}
      className={clsx(wrapperClass, className)}>
      <AntCheckbox
        {...rest}
        indeterminate={type === 'checkbox' ? indeterminate : undefined}
        disabled={disabled}
      />
      {(children || supportingText) && (
        <span className='checkbox-content'>
          {children && <span className='checkbox-label'>{children}</span>}
          {supportingText && (
            <span className='checkbox-supporting-text'>{supportingText}</span>
          )}
        </span>
      )}
    </CheckboxWrapper>
  );
}

export function CheckboxGroupBase(props: CheckboxGroupProps) {
  const { size = 'md', color = 'brand', className, ...rest } = props;

  return (
    <CheckboxGroupWrapper $size={size} $color={color} className={className}>
      <AntCheckbox.Group {...rest} />
    </CheckboxGroupWrapper>
  );
}

const CheckboxWrapper = styled.label<{
  $size?: CheckboxSize;
  $color?: ExtendedColor;
  $type?: CheckboxType;
  $disabled?: boolean;
}>`
  ${({ $size, $color, $type, $disabled, theme }) => {
    return css`
      ${getCheckboxVariables(theme, $size, $color)}

      display: inline-flex;
      align-items: flex-start;
      cursor: ${$disabled ? 'not-allowed' : 'pointer'};
      gap: 0.75rem;
      user-select: none;
      position: relative;
      padding: 0;
      margin: 0;

      .ant-checkbox-input {
        width: var(--checkbox-size);
        height: var(--checkbox-size);
      }

      .ant-checkbox-inner {
        width: var(--checkbox-size);
        height: var(--checkbox-size);
      }

      ${$type === 'checkbox' &&
      css`
        .ant-checkbox-inner {
          top: ${$size === 'sm' ? '0.1875rem' : '0.21875rem'};
          left: ${$size === 'sm' ? '0.125rem' : '0.145625rem'};
          border-radius: ${$size === 'sm'
            ? `${theme.radius['xs']}px`
            : `${theme.radius['sm']}px`};
        }

        .ant-checkbox-inner::after {
          position: absolute;
          top: 50%;
          left: 50%;
          width: ${$size === 'sm' ? '0.25rem' : '0.3125rem'};
          height: ${$size === 'sm' ? '0.5rem' : '0.5625rem'};
          border: ${$size === 'sm'
            ? `0.104375rem solid var(--checkbox-checked-bg)`
            : `0.125rem solid var(--checkbox-checked-bg)`};
          border-top: 0;
          border-left: 0;
          transform: translate(-50%, -60%) rotate(45deg) scale(1);
        }

        .ant-checkbox-indeterminate .ant-checkbox-inner::after {
          width: ${$size === 'sm' ? '0.5rem' : '0.625rem'};
          height: 0.125rem;
          border: none;
          background-color: var(--checkbox-checked-bg);
          transform: translate(-50%, -50%) scale(1);
          opacity: 1;
          top: 50%;
        }
      `}

      ${$type === 'radio' &&
      css`
        .ant-checkbox-inner {
          border-radius: 50%;
          width: ${$size === 'sm' ? '1rem' : '1.25rem'};
          height: ${$size === 'sm' ? '1rem' : '1.25rem'};
          position: relative;
          transition: all 0.2s ease;
        }

        .ant-checkbox-inner::after {
          position: absolute;
          content: '';
          width: ${$size === 'sm' ? '0.375rem' : '0.5rem'};
          height: ${$size === 'sm' ? '0.375rem' : '0.5rem'};
          border-radius: 50%;
          background-color: var(--checkbox-checked-bg);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0);
          transition: all 0.2s ease;
        }

        .ant-checkbox-checked .ant-checkbox-inner::after {
          transform: translate(-50%, -50%) scale(1);
        }

        .ant-checkbox-disabled.ant-checkbox-checked .ant-checkbox-inner::after {
          background-color: var(--checkbox-disabled-border);
          transform: translate(-50%, -50%) scale(1);
        }
      `}

  

      .ant-checkbox-indeterminate .ant-checkbox-inner {
        background-color: var(--checkbox-color);
        border-color: var(--checkbox-color);
      }
      .ant-checkbox-disabled.ant-checkbox-indeterminate
        .ant-checkbox-inner::after {
        background-color: var(--checkbox-border-color);
      }
      .ant-checkbox-disabled .ant-checkbox-inner {
        background-color: var(--checkbox-disabled-bg);
        border-color: var(--checkbox-disabled-border);
      }

      .ant-checkbox-disabled.ant-checkbox-checked .ant-checkbox-inner::after {
        border-color: var(--checkbox-disabled-border);
      }

      .checkbox-content {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        flex: 1;
        padding-top: 0.0625rem;
        color: var(--text-secondary);
      }

      .checkbox-label {
        font-size: ${$size === 'sm'
          ? theme.fontSize['text-sm']
          : theme.fontSize['text-md']}px;
        font-weight: ${({ theme }) => theme.fontWeight['medium']};
      }
      .ant-checkbox-input:focus-visible + .ant-checkbox-inner {
        border: 1px solid var(--checkbox-color);
        box-shadow: var(--checkbox-inner-shadow), var(--checkbox-outer-shadow);
        outline: none;
      }

      .checkbox-supporting-text {
        font-size: ${$size === 'sm'
          ? theme.fontSize['text-xs']
          : theme.fontSize['text-sm']}px;

        font-weight: ${({ theme }) => theme.fontWeight['regular']};
        color: var(--text-tertiary);
      }
    `;
  }}
`;

const CheckboxGroupWrapper = styled.div<{
  $size?: CheckboxSize;
  $color?: ExtendedColor;
}>`
  ${({ $size, $color, theme }) => {
    return css`
      ${getCheckboxVariables(theme, $size, $color)}

      .ant-checkbox-inner {
        width: var(--checkbox-size);
        height: var(--checkbox-size);
        border: 1px solid var(--checkbox-border-color);
        background-color: var(--checkbox-checked-bg);
        transition: all 0.2s ease;
        border-radius: ${$size === 'sm'
          ? `${theme.radius['xs']}px`
          : `${theme.radius['sm']}px`};
      }

      .ant-checkbox-inner::after {
        position: absolute;
        top: 50%;
        left: 50%;
        width: ${$size === 'sm' ? '0.25rem' : '0.3125rem'};
        height: ${$size === 'sm' ? '0.5rem' : '0.5625rem'};
        border: ${$size === 'sm'
          ? `0.1044rem solid var(--checkbox-checked-bg)`
          : `0.125rem solid var(--checkbox-checked-bg)`};
        border-top: 0;
        border-left: 0;
      }

      .ant-checkbox-checked .ant-checkbox-inner {
        background-color: var(--checkbox-color);
        border-color: var(--checkbox-color);
      }

      .ant-checkbox-checked .ant-checkbox-inner::after {
        transform: translate(-50%, -60%) rotate(45deg) scale(1);
        opacity: 1;
      }
      .ant-checkbox-input:focus-visible + .ant-checkbox-inner {
        border: 1px solid var(--checkbox-color);
        box-shadow: var(--checkbox-inner-shadow), var(--checkbox-outer-shadow);
        outline: none;
      }

      .ant-checkbox-disabled.ant-checkbox-checked .ant-checkbox-inner {
        background-color: var(--checkbox-disabled-bg);
        border-color: var(--checkbox-disabled-border);
      }

      .ant-checkbox-disabled.ant-checkbox-checked .ant-checkbox-inner::after {
        border-color: var(--checkbox-disabled-border);
      }
    `;
  }}
`;

export const Checkbox = Object.assign(CheckboxBase, {
  Group: CheckboxGroupBase,
});
