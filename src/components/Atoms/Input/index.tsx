import { Input as AntdInput, InputProps } from 'antd';
import { memo } from 'react';
import styled, { CSSProp } from 'styled-components';

const sizeMap = {
  sm: 'small',
  md: 'middle',
  lg: 'large',
} as const;

export type AntitledInputProps = Omit<InputProps, 'size'> & {
  size?: keyof typeof sizeMap;
  removeAffixLeftBorder?: boolean;
  removeAffixRightBorder?: boolean;
  removeGroupAddonBG?: boolean;
  cssProp?: CSSProp;
};

const getSizeProp = (size?: AntitledInputProps['size']): InputProps['size'] => {
  if (!size) return 'middle';
  if (size in sizeMap) return sizeMap[size as keyof typeof sizeMap];
  return size as InputProps['size'];
};

export const Input = memo<AntitledInputProps>(
  ({
    size,
    removeAffixLeftBorder = false,
    removeAffixRightBorder = false,
    removeGroupAddonBG = false,
    cssProp,
    ...props
  }) => {
    return (
      <>
        <StyledInput
          {...props}
          size={getSizeProp(size)}
          $removeAffixLeftBorder={removeAffixLeftBorder}
          $removeAffixRightBorder={removeAffixRightBorder}
          $removeGroupAddonBG={removeGroupAddonBG}
          $cssProp={cssProp}
        />
      </>
    );
  }
);

export const StyledInput = styled(AntdInput)<{
  $removeAffixLeftBorder?: boolean;
  $removeAffixRightBorder?: boolean;
  $removeGroupAddonBG?: boolean;
  $cssProp?: CSSProp;
}>`
  ${({ $removeAffixLeftBorder }) =>
    $removeAffixLeftBorder &&
    `
    :not(:hover).ant-input-affix-wrapper {
      border-left-color: transparent !important;
    }
  `}
  ${({ $removeAffixRightBorder }) =>
    $removeAffixRightBorder &&
    `
    :not(:hover).ant-input-affix-wrapper {
      border-right-color: transparent !important;
    }
  `}

  .ant-input-group-addon {
    color: ${({ theme }) => theme.colors['texts']['textTertiary600']};
    background-color: ${({ $removeGroupAddonBG }) =>
      $removeGroupAddonBG ? 'transparent' : undefined};
  }

  ${({ $removeGroupAddonBG }) =>
    $removeGroupAddonBG &&
    `
    .ant-input-group-addon {
      background: transparent !important;
    }
  `}

  .ant-input-prefix {
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors['foregrounds']['fgQuaternary400']};
  }
  ${({ $cssProp }) => $cssProp}
`;
