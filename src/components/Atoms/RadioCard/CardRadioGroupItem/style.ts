import styled, { css, DefaultTheme } from 'styled-components';

import { RadioGroupSize } from './index';

export const getRadioGroupSize = (size?: RadioGroupSize) => {
  const map: Record<
    RadioGroupSize,
    { headPadding: string; bodyPadding: string }
  > = {
    sm: { headPadding: '0.75rem', bodyPadding: '1rem' },
    md: { headPadding: '0.75rem', bodyPadding: '1rem' },
  };
  return size ? map[size] : map.md;
};

export const getRadioGroupVariables = (
  theme: DefaultTheme,
  size?: RadioGroupSize
) => {
  const sizes = getRadioGroupSize(size);
  return css`
    --radio-head-padding: ${sizes.headPadding};
    --radio-body-padding: ${sizes.bodyPadding};
    --radio-border-default: ${theme.colors.borders.borderSecondary};
    --radio-border-selected: ${theme.colors.borders.borderBrand};
    --radio-border-disabled: ${theme.colors.borders.borderDisabledSubtle};
    --radio-background-disabled: ${theme.colors.backgrounds.bgDisabledSubtle};
    --radio-background: ${theme.colors.backgrounds.bgPrimary};
    --radio-border-radius: ${theme.radius['xl']}px;
    --radio-description-text-colors: ${theme.colors.texts.textTertiary600};
    --radio-title-text-colors: ${theme.colors.texts.textSecondary700};
    --radio-inner-shadow: 0 0 0 0.125rem ${theme.colors.foregrounds.fgWhite};
    --radio-outer-shadow: 0 0 0 0.25rem ${theme.colors.effects.focusRing};
  `;
};

export const RadioGroupWrapper = styled.div<{
  $size?: RadioGroupSize;
  $isSelected?: boolean;
  $disabled?: boolean;
  $hasHead?: boolean;
}>`
  ${({ $size, $isSelected, theme, $disabled }) => css`
    ${getRadioGroupVariables(theme, $size)}

    .radio-group-card {
      width: 100%;
      overflow: hidden;
      border: 0.0625rem solid;
      border-color: ${$disabled
        ? 'var(--radio-border-disabled)'
        : $isSelected
          ? 'var(--radio-border-selected)'
          : 'var(--radio-border-default)'};
      box-shadow: ${$isSelected
        ? `inset 0 0 0 0.0625rem ${$disabled ? 'var(--radio-border-disabled)' : 'var(--radio-border-selected)'}`
        : 'none'};
      border-radius: var(--radio-border-radius);
      background: ${$disabled
        ? 'var(--radio-background-disabled)'
        : 'var(--radio-background)'};
      cursor: ${$disabled ? 'not-allowed' : 'pointer'};

      &:hover {
        border-color: ${$disabled
          ? 'var(--radio-border-disabled)'
          : $isSelected
            ? 'var(--radio-border-selected)'
            : 'var(--radio-border-default)'};
      }
      &:focus-visible {
        outline: none;
        box-shadow: ${$disabled
          ? 'none'
          : 'var(--radio-inner-shadow), var(--radio-outer-shadow)'};
      }

      .ant-card-head {
        padding: var(--radio-head-padding);
        border-bottom: 0.0625rem solid;
        box-shadow: ${$isSelected
          ? `inset 0 -0.0625rem 0 0 ${$disabled ? 'var(--radio-border-disabled)' : 'var(--radio-border-selected)'}`
          : 'none'};
        border-bottom-color: ${$disabled
          ? 'var(--radio-border-disabled)'
          : $isSelected
            ? 'var(--radio-border-selected)'
            : 'var(--radio-border-default)'};
      }

      .radio-group-header-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        width: 100%;
      }

      .radio-group-header-left {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex-shrink: 0;
      }

      .ant-card-body {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
        padding: var(--radio-body-padding);
      }

      .radio-group-body-container {
        display: flex;
        align-items: flex-start;
        width: 100%;
        gap: 0.75rem;
        @media (max-width: 768px) {
          flex-direction: column;
          align-items: stretch;
        }
      }

      .radio-group-body-left {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex-shrink: 0;
      }

      .radio-group-body-center {
        flex: 1;
        display: flex;
        flex-direction: column;
      }

      .radio-group-body-right {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex-shrink: 0;

        ${$disabled &&
        css`
          color: var(--radio-color-disabled-extra);
        `}
      }

      .ant-card-head-title,
      .radio-group-title-text {
        color: var(--radio-title-text-colors);
        font-weight: ${theme.fontWeight.semibold};
        font-size: ${$size === 'sm'
          ? `${theme.fontSize['text-md']}px`
          : `${theme.fontSize['text-lg']}px`};
        line-height: ${theme.lineHeight['text-md']}px;
      }

      .ant-card-meta {
        align-items: center;
      }

      .ant-card-meta-avatar {
        padding-right: 0.75rem;
      }

      .ant-card-meta-title {
        color: var(--radio-title-text-colors);
        font-weight: ${theme.fontWeight.medium};
        font-size: ${$size === 'sm'
          ? `${theme.fontSize['text-sm']}px`
          : `${theme.fontSize['text-md']}px`};
      }

      .ant-card-meta-description {
        color: var(--radio-description-text-colors);
        font-size: ${$size === 'sm'
          ? `${theme.fontSize['text-sm']}px`
          : `${theme.fontSize['text-md']}px`};
        font-weight: ${theme.fontWeight.regular};
      }

      .radio-group-description {
        color: var(--radio-description-text-colors);
        font-size: ${$size === 'sm'
          ? `${theme.fontSize['text-sm']}px`
          : `${theme.fontSize['text-md']}px`};
        font-weight: ${theme.fontWeight.regular};
        line-height: ${theme.lineHeight['text-sm']}px;
        margin-top: 0.25rem;
      }
    }
  `}
`;
