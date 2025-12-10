import { TabsProps as AntTabProps, Tabs as AntTabs } from 'antd';
import { memo } from 'react';
import styled, { css } from 'styled-components';

type TabSize = 'sm' | 'md';
type TabOrientation = 'horizontal' | 'vertical';
type TabVariant =
  | 'button-brand'
  | 'button-gray'
  | 'underline'
  | 'button-bordered'
  | 'button-minimal';

export type TabsProps = Omit<AntTabProps, 'size'> & {
  size?: TabSize;
  variant?: TabVariant;
  className?: string;
};

export type TabItem = NonNullable<AntTabProps['items']>[number];

export const Tabs = memo<TabsProps>(
  ({ size = 'md', variant = 'underline', tabPlacement, ...props }) => {
    const orientation =
      tabPlacement === 'start' || tabPlacement === 'end'
        ? 'vertical'
        : 'horizontal';

    return (
      <StyledTabsWrapper
        $variant={variant}
        $size={size}
        $orientation={orientation}>
        <AntTabs
          {...props}
          tabPlacement={tabPlacement}
          type={variant === 'underline' ? 'line' : 'card'}
        />
      </StyledTabsWrapper>
    );
  }
);

Tabs.displayName = 'Tabs';

const getVariantStyles = (
  variant: TabVariant,
  size: TabSize,
  orientation: TabOrientation
) => {
  const isVertical = orientation === 'vertical';
  const padding = size === 'sm' ? '0.5rem 0.75rem' : '0.625rem 1rem';
  const height = size === 'sm' ? '2.25rem' : '2.75rem';

  const baseTabStyles = css`
    .ant-tabs-tab {
      padding: ${padding} !important;
      height: ${height};
      margin: 0 !important;
      font-size: ${({ theme }) =>
        size === 'sm'
          ? theme.fontSize['text-sm']
          : theme.fontSize['text-md']}px !important;
      font-weight: ${({ theme }) => theme.fontWeight.semibold} !important;
      transition: all 0.2s ease;
      border: none !important;
      background: transparent !important;
      color: ${({ theme }) => theme.colors.texts.textQuaternary500} !important;

      &:hover {
        color: ${({ theme }) => theme.colors.texts.textSecondary700} !important;
      }

      &-disabled {
        opacity: 0.5;
        cursor: not-allowed !important;
      }

      .ant-tabs-tab-btn {
        display: inline-flex;
        align-items: center;
      }

      .ant-tabs-tab-icon {
        margin-inline-end: 0.375rem;
        display: inline-flex;
        align-items: center;
      }
    }
    /* remove the vertical border */
    .ant-tabs-content-holder {
      border-left: none !important;
    }
  `;

  switch (variant) {
    case 'underline':
      return css`
        ${baseTabStyles}

        .ant-tabs-nav {
          &::before {
            border-bottom: 1px solid
              ${({ theme }) => theme.colors.borders.borderSecondary} !important;
          }
        }

        ${isVertical &&
        css`
          .ant-tabs-nav {
            &::before {
              border-bottom: none !important;
              border-right: 1px solid
                ${({ theme }) => theme.colors.borders.borderSecondary} !important;
            }
          }
        `}

        .ant-tabs-tab {
          border-radius: 0 !important;

          &:hover {
            color: ${({ theme }) =>
              theme.colors.texts.textBrandSecondary700} !important;
          }

          &-active {
            color: ${({ theme }) =>
              theme.colors.texts.textBrandSecondary700} !important;
          }
        }

        .ant-tabs-ink-bar {
          /* move this ink bar to left instead of right */
          ${isVertical &&
          css`
            left: 0 !important;
            right: auto !important;
          `}
        }
      `;

    case 'button-brand':
      return css`
        ${baseTabStyles}

        .ant-tabs-nav {
          &::before {
            border: none !important;
          }
        }

        .ant-tabs-tab {
          border-radius: ${({ theme }) => theme.radius.sm}px !important;

          &:hover {
            background: ${({ theme }) =>
              `${theme.colors.backgrounds.bgBrandPrimaryAlt}`} !important;
            color: ${({ theme }) =>
              theme.colors.texts.textBrandSecondary700} !important;
          }

          &-active {
            background: ${({ theme }) =>
              theme.colors.backgrounds.bgBrandPrimaryAlt} !important;
          }
        }

        .ant-tabs-ink-bar {
          display: none;
        }
      `;

    case 'button-gray':
      return css`
        ${baseTabStyles}

        .ant-tabs-nav {
          &::before {
            border: none !important;
          }
        }

        .ant-tabs-tab {
          border-radius: ${({ theme }) => theme.radius.sm}px !important;

          &:hover {
            background: ${({ theme }) =>
              theme.colors.backgrounds.bgActive} !important;
          }

          &-active {
            background: ${({ theme }) =>
              theme.colors.backgrounds.bgActive} !important;
            .ant-tabs-tab-btn {
              color: ${({ theme }) =>
                theme.colors.texts.textSecondary700} !important;
            }
          }
        }

        .ant-tabs-ink-bar {
          display: none;
        }
      `;

    case 'button-bordered':
      return css`
        ${baseTabStyles}

        .ant-tabs-nav {
          padding: 0.125rem;
          background-color: ${({ theme }) =>
            theme.colors.backgrounds.bgSecondaryAlt};
          border-radius: ${({ theme }) => theme.radius.lg};
          border: 1px solid
            ${({ theme }) => theme.colors.borders.borderSecondary};

          &::before {
            border: none !important;
          }
        }

        .ant-tabs-tab {
          border-radius: ${({ theme }) => theme.radius.md}px !important;
          border: 1px solid transparent !important;

          &:hover {
            background: ${({ theme }) =>
              theme.colors.backgrounds.bgPrimaryAlt} !important;
            border-color: ${({ theme }) =>
              theme.colors.borders.borderSecondary} !important;
          }

          &-active {
            background: ${({ theme }) =>
              theme.colors.backgrounds.bgPrimaryAlt} !important;
            border-color: ${({ theme }) =>
              theme.colors.borders.borderSecondary} !important;
            .ant-tabs-tab-btn {
              color: ${({ theme }) =>
                theme.colors.texts.textSecondary700} !important;
            }
            box-shadow:
              0px 1px 2px -1px ${({ theme }) => theme.colors.effects.shadowSm01},
              0px 1px 3px 0px ${({ theme }) => theme.colors.effects.shadowSm02};
          }
        }

        .ant-tabs-ink-bar {
          display: none;
        }
      `;
    case 'button-minimal':
      return css`
        ${baseTabStyles}

        .ant-tabs-nav {
          background-color: ${({ theme }) =>
            theme.colors.backgrounds.bgSecondaryAlt};
          border-radius: ${({ theme }) => theme.radius.md};
          border: 1px solid ${({ theme }) => theme.colors.borders.borderPrimary};

          &::before {
            border: none !important;
          }
        }

        .ant-tabs-tab {
          border-radius: ${({ theme }) =>
            `calc(${theme.radius.md} - 1px)`} !important;
          border: 1px solid transparent !important;

          &:hover {
            background: ${({ theme }) =>
              theme.colors.backgrounds.bgPrimaryAlt} !important;
            border-color: ${({ theme }) =>
              theme.colors.borders.borderPrimary} !important;
          }

          &-active {
            background: ${({ theme }) =>
              theme.colors.backgrounds.bgPrimaryAlt} !important;
            border-color: ${({ theme }) =>
              theme.colors.borders.borderPrimary} !important;
            .ant-tabs-tab-btn {
              color: ${({ theme }) =>
                theme.colors.texts.textSecondary700} !important;
            }
          }
        }

        .ant-tabs-ink-bar {
          display: none;
        }
      `;

    default:
      return baseTabStyles;
  }
};

const StyledTabsWrapper = styled.div<{
  $variant: TabVariant;
  $size: TabSize;
  $orientation: TabOrientation;
}>`
  width: 100%;

  .ant-tabs {
    ${({ $variant, $size, $orientation }) =>
      getVariantStyles($variant, $size, $orientation)}
  }

  .ant-tabs-nav {
    margin: 0 !important;

    &-list {
      gap: ${({ $variant }) => ($variant === 'underline' ? '0' : '0.25rem')};
    }
  }

  .ant-tabs-content {
    padding: 1rem 0;
  }
`;
