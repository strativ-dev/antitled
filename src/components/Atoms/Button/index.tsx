import { Button as AntButton, ConfigProvider } from 'antd';
import clsx from 'clsx';
import { ComponentProps, memo, useContext } from 'react';
import styled from 'styled-components';

import { ButtonSpinner } from '@/components/Atoms/Button/ButtonSpinner';

type AntButtonProps = ComponentProps<typeof AntButton>;
type ExtendedVariant =
  | AntButtonProps['variant']
  | 'primary'
  | 'secondary'
  | 'tertiary';

export type ExtendedColor =
  | AntButtonProps['color']
  | 'destructive'
  | 'gray'
  | 'info'
  | 'success'
  | 'warning';

export type ButtonProps = Omit<AntButtonProps, 'size' | 'color' | 'variant'> & {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: ExtendedVariant;
  color?: ExtendedColor;
};

const getButtonVariant = (variant?: ButtonProps['variant']) => {
  const variantMap = {
    solid: 'solid',
    outlined: 'outlined',
    dashed: 'dashed',
    filled: 'filled',
    text: 'text',
    link: 'link',
    primary: 'solid',
    secondary: 'outlined',
    tertiary: 'text',
  } as const;

  return variant ? variantMap[variant] : 'solid';
};

const getButtonSize = (
  size?: ButtonProps['size'],
  block?: boolean,
  isIconButton?: boolean
) => {
  if (!isIconButton) return block ? '100%' : 'auto';

  const sizeMap = {
    xs: '2rem',
    sm: '2.25rem',
    md: '2.5rem',
    lg: '2.75rem',
    xl: '3rem',
  };

  return size ? sizeMap[size] : block ? '100%' : 'auto';
};

const getButtonColor = (color?: ExtendedColor): AntButtonProps['color'] => {
  const colorMap: Record<string, NonNullable<AntButtonProps['color']>> = {
    destructive: 'danger',
    success: 'green',
    info: 'blue',
    warning: 'orange',
    gray: 'default',
    // Add other mappings as needed
  } as const;

  if (!color) return undefined;

  if (color in colorMap) {
    return colorMap[color];
  }

  return color as AntButtonProps['color'];
};

export const Button = memo<ButtonProps>(
  ({
    className,
    size = 'md',
    color,
    block,
    variant = 'primary',
    loading,
    ...rest
  }) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('btn');

    // set default color to default when secondary/outlined/tertiary/text variant is used
    if (
      !color &&
      ['secondary', 'tertiary', 'outlined', 'text'].includes(variant)
    ) {
      color = 'gray';
    } else if (!color) {
      color = 'primary';
    }

    if (loading) {
      if (typeof loading === 'object' && !loading?.icon) {
        loading = { ...loading, icon: <ButtonSpinner $color={color} /> };
      } else if (loading === true) {
        loading = { icon: <ButtonSpinner $color={color} /> };
      }
    }

    const ButtonComponent = () => (
      <AntButton
        {...rest}
        block={block}
        color={getButtonColor(color)}
        variant={getButtonVariant(variant)}
        loading={loading}
        className={clsx(
          {
            [`${prefixCls}-${size}`]: size,
          },
          className
        )}
      />
    );

    return (
      <ButtonWrapper $size={size} $block={block} $isIconButton={!rest.children}>
        <ButtonComponent />
      </ButtonWrapper>
    );
  }
);

const ButtonWrapper = styled.div<{
  $size?: ButtonProps['size'];
  $block?: boolean;
  $isIconButton?: boolean;
}>`
  --button-width: ${({ $size, $block, $isIconButton }) =>
    getButtonSize($size, $block, $isIconButton)};

  display: inline-flex;
  width: ${({ $block }) => ($block ? '100%' : 'auto')};

  .ant-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: ${({ theme }) => theme.radius['md']}px;
    width: ${({ $block }) => ($block ? '100%' : 'auto')};
  }

  .ant-btn-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .ant-btn-xs {
    font-size: ${({ theme }) => theme.fontSize['text-xs']}px;
    font-weight: ${({ theme }) => theme.fontWeight['regular']};
    line-height: ${({ theme }) => theme.lineHeight['text-sm']}px;
    height: 2rem;
    padding: 0rem 0.75rem;
    width: var(--button-width);
  }

  .ant-btn-sm {
    font-size: ${({ theme }) => theme.fontSize['text-sm']}px;
    font-weight: ${({ theme }) => theme.fontWeight['semibold']};
    line-height: ${({ theme }) => theme.lineHeight['text-sm']}px;
    padding: 0.5rem 0.75rem;
    height: 2.25rem;
    width: var(--button-width);
  }

  .ant-btn-md {
    font-size: ${({ theme }) => theme.fontSize['text-sm']}px;
    font-weight: ${({ theme }) => theme.fontWeight['semibold']};
    line-height: ${({ theme }) => theme.lineHeight['text-sm']}px;
    padding: 0rem 0.875rem;
    height: 2.5rem;
    width: var(--button-width);
  }

  .ant-btn-lg {
    font-size: ${({ theme }) => theme.fontSize['text-md']}px;
    font-weight: ${({ theme }) => theme.fontWeight['semibold']};
    line-height: ${({ theme }) => theme.lineHeight['text-md']}px;
    padding: 0rem 1rem;
    height: 2.75rem;
    width: var(--button-width);
  }

  .ant-btn-xl {
    font-size: ${({ theme }) => theme.fontSize['text-md']}px;
    font-weight: ${({ theme }) => theme.fontWeight['semibold']};
    line-height: ${({ theme }) => theme.lineHeight['text-md']}px;
    height: 3rem;
    padding: 0rem 1.125rem;
    width: var(--button-width);
  }

  .ant-btn-default {
    &:not(:disabled):focus-visible {
      outline: 2px solid
        var(--focus-ring-color, ${({ theme }) => theme.colors['Brand']['300']});
      outline-offset: 2px;
    }
  }

  .ant-btn-variant-solid {
    color: ${({ theme }) => theme.colors['texts']['textWhite']};

    //TODO: Add special border/shadows

    &.ant-btn-color-default {
      color: ${({ theme }) =>
        theme.mode === 'dark' ? 'black' : theme.colors['texts']['textWhite']};
    }

    &.ant-btn-color-primary {
      &:not(:disabled):not(.ant-btn-disabled):hover {
        background-color: ${({ theme }) =>
          theme.colors.backgrounds['bgBrandSolidHover']};
      }
    }

    &.ant-btn-color-dangerous {
      &:not(:disabled):not(.ant-btn-disabled):hover {
        background-color: ${({ theme }) =>
          theme.colors.backgrounds['bgErrorSolidHover']};
      }
    }

    // green is success
    &.ant-btn-color-green {
      &:not(:disabled):not(.ant-btn-disabled):hover {
        background-color: ${({ theme }) =>
          theme.colors.backgrounds['bgSuccessSolidHover']};
      }
    }

    // orange is warning
    &.ant-btn-color-orange {
      &:not(:disabled):not(.ant-btn-disabled):hover {
        background-color: ${({ theme }) =>
          theme.colors.backgrounds['bgWarningSolidHover']};
      }
    }

    &:disabled,
    &.ant-btn-disabled {
      background-color: ${({ theme }) =>
        theme.colors.backgrounds['bgDisabled']};
      color: ${({ theme }) => theme.colors.foregrounds['fgDisabled']};
      border-color: ${({ theme }) =>
        theme.colors.borders['borderDisabledSubtle']};
    }

    &.ant-btn-color-primary.ant-btn-loading {
      opacity: 1;
      background-color: ${({ theme }) =>
        theme.colors.backgrounds['bgBrandSolidHover']};
    }
    &.ant-btn-color-dangerous.ant-btn-loading {
      opacity: 1;
      background-color: ${({ theme }) =>
        theme.colors.backgrounds['bgErrorSolidHover']};
    }
  }

  .ant-btn-color-default.ant-btn-variant-outlined {
    color: ${({ theme }) => theme.colors.texts.textSecondary700};

    &:not(:disabled):not(.ant-btn-disabled):hover {
      background-color: ${({ theme }) =>
        theme.colors.backgrounds.bgPrimaryHover};
      color: ${({ theme }) => theme.colors.texts.textSecondaryHover};
      border-color: ${({ theme }) => theme.colors.borders.borderPrimary};
    }
  }

  .ant-btn-color-default.ant-btn-variant-outlined {
    box-shadow:
      0px 1px 2px 0px rgba(10, 13, 18, 0.05),
      0px -2px 0px 0px rgba(10, 13, 18, 0.05) inset,
      0px 0px 0px 1px rgba(10, 13, 18, 0.18) inset;

    border-width: ${({ theme }) => (theme.mode === 'dark' ? '1px' : '0')};
  }

  .ant-btn-variant-outlined {
    &:disabled,
    &.ant-btn-disabled {
      color: ${({ theme }) => theme.colors['foregrounds']['fgDisabled']};
      background-color: ${({ theme }) =>
        theme.colors['backgrounds']['bgPrimary']};
      border-color: ${({ theme }) =>
        theme.colors['borders']['borderDisabledSubtle']};
    }
  }

  .ant-btn-color-default.ant-btn-variant-text {
    color: ${({ theme }) => theme.colors.texts.textTertiary600};

    &:not(:disabled):not(.ant-btn-disabled):hover {
      background-color: ${({ theme }) =>
        theme.colors.backgrounds.bgPrimaryHover};
      color: ${({ theme }) => theme.colors.texts.textTertiaryHover};
    }
  }

  .ant-btn-color-primary.ant-btn-variant-text {
    &:not(:disabled):not(.ant-btn-disabled):hover {
      color: ${({ theme }) => theme.colors['Brand']['700']};
    }
  }

  .ant-btn-variant-text {
    &:disabled,
    &.ant-btn-disabled {
      color: ${({ theme }) => theme.colors['foregrounds']['fgDisabled']};
    }
  }

  .ant-btn-color-default.ant-btn-variant-link {
    color: ${({ theme }) => theme.colors.texts.textTertiary600};

    &:not(:disabled):not(.ant-btn-disabled):hover {
      color: ${({ theme }) => theme.colors.texts.textTertiaryHover};
      text-decoration-color: currentColor;
    }
  }

  .ant-btn-variant-link {
    text-decoration-color: currentColor;
    padding: 0;
    height: auto;
    border-radius: ${({ theme }) => theme.radius['xs']}px;

    &.ant-btn-color-primary {
      &:not(:disabled):not(.ant-btn-disabled):hover {
        color: ${({ theme }) => theme.colors.texts['textBrandSecondary700']};
      }
    }

    &:not(:disabled):not(.ant-btn-disabled):hover {
      text-decoration: underline;
    }

    &:disabled,
    &.ant-btn-disabled {
      color: ${({ theme }) => theme.colors['foregrounds']['fgDisabled']};
    }
  }

  .ant-btn-color-primary {
    --focus-ring-color: ${({ theme }) => theme.colors.Brand['500']};
  }

  .ant-btn-color-dangerous {
    --focus-ring-color: ${({ theme }) => theme.colors.Error['500']};
  }

  .ant-btn-color-orange {
    --focus-ring-color: ${({ theme }) => theme.colors.Orange['500']};
  }

  .ant-btn-color-green {
    --focus-ring-color: ${({ theme }) => theme.colors.Success['500']};
  }

  .ant-btn-color-yellow {
    --focus-ring-color: ${({ theme }) => theme.colors.Warning['500']};
  }
`;

Button.displayName = 'Button';
