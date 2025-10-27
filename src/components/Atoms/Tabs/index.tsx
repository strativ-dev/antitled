import { useState, useCallback, memo } from 'react';
import styled, { css, DefaultTheme } from 'styled-components';

// ============================================================================
// TYPES - Single Responsibility: Define clear interfaces
// ============================================================================

type TabSize = 'sm' | 'md';
type TabOrientation = 'horizontal' | 'vertical';
type TabVariant =
  | 'button-brand'
  | 'button-gray'
  | 'underline'
  | 'button-bordered'
  | 'button-minimal';

export type TabItem = {
  key: string;
  label: React.ReactNode;
  content?: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
};

export type TabsProps = {
  items: TabItem[];
  defaultActiveKey?: string;
  activeKey?: string; // Controlled mode
  onChange?: (key: string) => void;
  size?: TabSize;
  orientation?: TabOrientation;
  variant?: TabVariant;
  fullWidth?: boolean;
  className?: string;
};

type TabButtonProps = {
  item: TabItem;
  isActive: boolean;
  onClick: (key: string) => void;
  size: TabSize;
  variant: TabVariant;
  orientation: TabOrientation;
};

// ============================================================================
// SUB-COMPONENTS - Separation of Concerns
// ============================================================================

/**
 * TabButton - Single Responsibility: Render individual tab button
 * Open/Closed: Extend via props, closed for modification
 */
const TabButton = memo<TabButtonProps>(
  ({
    item,
    isActive,
    onClick,
    size = 'sm',
    variant = 'underline',
    orientation = 'horizontal',
  }) => {
    const handleClick = useCallback(() => {
      if (!item.disabled) {
        onClick(item.key);
      }
    }, [item.key, item.disabled, onClick]);

    return (
      <StyledTabButton
        $isActive={isActive}
        $size={size}
        $variant={variant}
        $orientation={orientation}
        $disabled={item.disabled}
        onClick={handleClick}
        role='tab'
        aria-selected={isActive}
        aria-disabled={item.disabled}>
        {item.icon && <TabIcon>{item.icon}</TabIcon>}
        <TabLabel>{item.label}</TabLabel>
      </StyledTabButton>
    );
  }
);

TabButton.displayName = 'TabButton';

/**
 * TabContent - Single Responsibility: Render tab content panel
 */
const TabContent = memo<{ children: React.ReactNode }>(({ children }) => (
  <StyledTabContent role='tabpanel'>{children}</StyledTabContent>
));

TabContent.displayName = 'TabContent';

// ============================================================================
// MAIN COMPONENT - Interface Segregation: Clean public API
// ============================================================================

/**
 * Tabs Component
 *
 * SOLID Principles Applied:
 * - Single Responsibility: Each sub-component handles one concern
 * - Open/Closed: Extensible via props, variants can be added without changing core logic
 * - Liskov Substitution: Can work in controlled/uncontrolled mode
 * - Interface Segregation: Clean props interface, consumers only use what they need
 * - Dependency Inversion: Depends on abstractions (TabItem type), not concrete implementations
 */
export const Tabs = memo<TabsProps>(
  ({
    items,
    defaultActiveKey,
    activeKey: controlledActiveKey,
    onChange,
    size = 'md',
    orientation = 'horizontal',
    variant = 'underline',
    fullWidth = false,
    className,
  }) => {
    // State management: Support both controlled and uncontrolled modes
    const [internalActiveKey, setInternalActiveKey] = useState<string>(
      defaultActiveKey || items[0]?.key || ''
    );

    const activeKey = controlledActiveKey ?? internalActiveKey;

    const handleTabChange = useCallback(
      (key: string) => {
        if (!controlledActiveKey) {
          setInternalActiveKey(key);
        }
        onChange?.(key);
      },
      [controlledActiveKey, onChange]
    );

    const activeContent = items.find((item) => item.key === activeKey)?.content;

    return (
      <StyledTabsContainer className={className} $orientation={orientation}>
        <StyledTabsList
          $orientation={orientation}
          $variant={variant}
          $fullWidth={fullWidth}
          role='tablist'
          aria-orientation={orientation}>
          {items.map((item) => (
            <TabButton
              key={item.key}
              item={item}
              isActive={activeKey === item.key}
              onClick={handleTabChange}
              size={size}
              variant={variant}
              orientation={orientation}
            />
          ))}
        </StyledTabsList>
        {activeContent && <TabContent>{activeContent}</TabContent>}
      </StyledTabsContainer>
    );
  }
);

Tabs.displayName = 'Tabs';

// ============================================================================
// STYLED COMPONENTS - Presentation Logic Separated
// ============================================================================

const StyledTabsContainer = styled.div<{
  $orientation: TabOrientation;
}>`
  display: flex;
  flex-direction: ${({ $orientation }) =>
    $orientation === 'vertical' ? 'row' : 'column'};
  gap: ${({ $orientation }) => ($orientation === 'vertical' ? '24px' : '16px')};
  width: 100%;
`;

const StyledTabsList = styled.div<{
  $orientation: TabOrientation;
  $variant: TabVariant;
  $fullWidth: boolean;
}>`
  display: flex;
  flex-direction: ${({ $orientation }) =>
    $orientation === 'vertical' ? 'column' : 'row'};
  gap: ${({ $variant }) => ($variant === 'underline' ? '0' : '4px')};
  width: ${({ $fullWidth, $orientation }) =>
    $fullWidth && $orientation === 'horizontal' ? '100%' : 'auto'};

  padding: ${({ $variant }) => ($variant === 'button-bordered' ? '2px' : '0')};
  background-color: ${({ theme, $variant }) =>
    ['button-bordered', 'button-minimal'].includes($variant)
      ? theme.colors.backgrounds.bgSecondaryAlt
      : 'transparent'};
  border-radius: ${({ theme }) => theme.radius.lg}px;
  border: 1px solid
    ${({ theme, $variant }) =>
      ['button-bordered', 'button-minimal'].includes($variant)
        ? theme.colors.borders.borderSecondary
        : 'transparent'};

  ${({ $variant, $orientation, theme }) =>
    $variant === 'underline' &&
    css`
      ${$orientation === 'horizontal'
        ? `border-bottom: 1px solid ${theme.colors.borders.borderSecondary};`
        : `border-left: 0px solid ${theme.colors.borders.borderSecondary};`}
    `}
`;

const getTabButtonStyles = (
  variant: TabVariant,
  isActive: boolean,
  disabled?: boolean,
  size?: TabSize
) => {
  const getColor = (theme: DefaultTheme) => {
    if (disabled) return theme.colors.texts.textDisabled;
    if (isActive) {
      switch (variant) {
        case 'button-brand':
          return theme.colors.texts.textBrandSecondary700;
        case 'button-gray':
          return theme.colors.texts.textSecondary700;
        case 'underline':
          return theme.colors.texts.textBrandSecondary700;
        default:
          return theme.colors.texts.textSecondary700;
      }
    }
    return theme.colors.texts.textQuaternary500;
  };

  const getBackground = (theme: DefaultTheme) => {
    if (disabled) return 'transparent';
    if (isActive) {
      switch (variant) {
        case 'button-brand':
          return theme.colors.backgrounds.bgBrandPrimaryAlt;
        case 'button-gray':
          return theme.colors.backgrounds.bgActive;
        case 'button-bordered':
        case 'button-minimal':
          return theme.colors.backgrounds.bgPrimaryAlt;
        default:
          return 'transparent';
      }
    }
    return 'transparent';
  };

  const getBorder = (theme: DefaultTheme) => {
    if (isActive) {
      switch (variant) {
        case 'button-bordered':
          return `1px solid ${theme.colors.borders.borderSecondary}`;
        case 'button-minimal':
          return `1px solid ${theme.colors.borders.borderPrimary}`;
        default:
          return 'none';
      }
    } else {
      switch (variant) {
        case 'button-bordered':
          return `1px solid transparent`;
        case 'button-minimal':
          return `1px solid transparent`;
        default:
          return 'none';
      }
    }
  };

  const getHoverBackground = (theme: DefaultTheme) => {
    if (disabled) return 'transparent';
    switch (variant) {
      case 'button-brand':
        return isActive
          ? theme.colors.backgrounds.bgBrandPrimaryAlt
          : `${theme.colors.backgrounds.bgBrandPrimaryAlt}90`;
      case 'button-gray':
        return isActive
          ? theme.colors.backgrounds.bgActive
          : theme.colors.backgrounds.bgPrimaryAlt;
      case 'button-minimal':
      case 'button-bordered':
        return theme.colors.backgrounds.bgPrimaryAlt;
      default:
        return 'transparent';
    }
  };

  const getHeight = () => {
    switch (size) {
      case 'sm':
        return '36px';
      case 'md':
        return '44px';
      default:
        return '36px';
    }
  };

  return css`
    color: ${({ theme }) => getColor(theme)};
    background: ${({ theme }) => getBackground(theme)};
    border: ${({ theme }) => getBorder(theme)};
    height: ${getHeight()};

    &:hover {
      background: ${({ theme }) => getHoverBackground(theme)};
      color: ${({ theme }) =>
        disabled
          ? theme.colors.texts.textDisabled
          : isActive
            ? getColor(theme)
            : theme.colors.texts.textSecondary700};
    }
  `;
};

const StyledTabButton = styled.button<{
  $isActive: boolean;
  $size: TabSize;
  $variant: TabVariant;
  $orientation: TabOrientation;
  $disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: ${({ $orientation }) =>
    $orientation === 'vertical' ? 'flex-start' : 'center'};
  gap: 4px;
  padding: ${({ $size }) => ($size === 'sm' ? '8px 12px' : '10px 16px')};
  font-size: ${({ $size, theme }) =>
    $size === 'sm' ? theme.fontSize['text-sm'] : theme.fontSize['text-md']}px;
  font-weight: ${({ $isActive }) => ($isActive ? '600' : '500')};
  border-radius: ${({ theme }) => theme.radius.sm}px;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  transition: all 0.2s ease;
  position: relative;
  white-space: nowrap;
  border: none;
  outline: none;
  user-select: none;

  ${({ $variant, $isActive, $disabled }) =>
    getTabButtonStyles($variant, $isActive, $disabled)}

  ${({ $variant, $isActive, $orientation }) =>
    $variant === 'underline' &&
    css`
      border-radius: 0;
      ${$orientation === 'horizontal'
        ? css`
            padding-bottom: 12px;
            margin-bottom: -1px;
          `
        : css`
            padding-right: 12px;
            margin-right: -1px;
          `}

      &::after {
        content: '';
        position: absolute;
        ${$orientation === 'horizontal'
          ? css`
              bottom: 0;
              left: 0;
              right: 0;
              height: 2px;
              width: 100%;
            `
          : css`
              left: 0;
              top: 0;
              bottom: 0;
              width: 2px;
              height: 100%;
            `}
        background: ${({ theme }) =>
          $isActive ? theme.colors.borders.borderBrand : 'transparent'};
        transition: background 0.2s ease;
      }
    `}

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.borders.borderBrand};
    outline-offset: 2px;
  }
`;

const TabIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const TabLabel = styled.span`
  display: inline-block;
  font-weight: ${({ theme }) => theme.fontWeight['semibold']};
`;

const StyledTabContent = styled.div`
  padding: 16px 0;
  animation: fadeIn 0.2s ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
