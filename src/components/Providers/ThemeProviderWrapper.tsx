import { App, ConfigProvider, theme, ThemeConfig } from 'antd';
import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import {
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  RADIUS,
  SHADOWS,
  SPACING,
} from '@/config/styles';
import GlobalStyles from '@/lib/theme/globals';
import useAppStore from '@/stores/useAppStore';

interface ThemeProviderWrapperProps {
  children: React.ReactNode;
}

const ThemeProviderWrapper = ({ children }: ThemeProviderWrapperProps) => {
  const {
    colorPalette,
    theme: themeMode,
    setTheme,
    isCompactMode,
  } = useAppStore();

  // Handle initial system theme detection
  useEffect(() => {
    if (themeMode === 'system') {
      const systemIsDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      setTheme(systemIsDark ? 'dark' : 'light');
      return;
    }

    // Update HTML element
    const htmlElement = document.documentElement;
    if (themeMode === 'dark') {
      htmlElement.classList.add('dark');
      htmlElement.classList.remove('light');
      htmlElement.setAttribute('data-theme', 'dark');
      htmlElement.style.colorScheme = 'dark';
    } else {
      htmlElement.classList.add('light');
      htmlElement.classList.remove('dark');
      htmlElement.setAttribute('data-theme', 'light');
      htmlElement.style.colorScheme = 'light';
    }
  }, [themeMode, setTheme]);

  // Get theme algorithms based on mode and compact setting
  const getThemeAlgorithm = () => {
    const algorithms = [];

    // Add base algorithm (light/dark)
    if (themeMode === 'dark') {
      algorithms.push(theme.darkAlgorithm);
    } else {
      algorithms.push(theme.defaultAlgorithm);
    }

    // Add compact algorithm if enabled
    if (isCompactMode) {
      algorithms.push(theme.compactAlgorithm);
    }

    return algorithms;
  };

  const themeConfig: ThemeConfig = {
    algorithm: getThemeAlgorithm(),

    token: {
      fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',

      // Colors
      colorPrimary: colorPalette.Brand['600'],
      colorSuccess: colorPalette.Success['600'],
      colorWarning: colorPalette.Warning['600'],
      colorError: colorPalette.Error['600'],
      colorInfo: colorPalette.Blue['600'],

      green1: colorPalette['Green light']['100'],
      green2: colorPalette['Green light']['200'],
      green3: colorPalette['Green light']['300'],
      green4: colorPalette['Green light']['400'],
      green5: colorPalette['Green light']['500'],
      green6: colorPalette['Green light']['600'],
      green7: colorPalette['Green light']['700'],
      green8: colorPalette['Green light']['800'],
      green9: colorPalette['Green light']['900'],

      blue1: colorPalette['Blue light']['100'],
      blue2: colorPalette['Blue light']['200'],
      blue3: colorPalette['Blue light']['300'],
      blue4: colorPalette['Blue light']['400'],
      blue5: colorPalette['Blue light']['500'],
      blue6: colorPalette['Blue light']['600'],
      blue7: colorPalette['Blue light']['700'],
      blue8: colorPalette['Blue light']['800'],
      blue9: colorPalette['Blue light']['900'],

      orange1: colorPalette['Orange']['100'],
      orange2: colorPalette['Orange']['200'],
      orange3: colorPalette['Orange']['300'],
      orange4: colorPalette['Orange']['400'],
      orange5: colorPalette['Orange']['500'],
      orange6: colorPalette['Orange']['600'],
      orange7: colorPalette['Orange']['700'],
      orange8: colorPalette['Orange']['800'],
      orange9: colorPalette['Orange']['900'],

      // Text colors
      colorText: colorPalette.texts.textPrimary900,
      colorTextSecondary: colorPalette.texts.textSecondary700,
      colorTextTertiary: colorPalette.texts.textTertiary600,
      colorTextQuaternary: colorPalette.texts.textQuaternary500,
      colorTextDisabled: colorPalette.texts.textDisabled,

      // Background colors
      colorBgContainer: colorPalette.backgrounds.bgPrimary,
      colorBgElevated: colorPalette.backgrounds.bgPrimaryAlt,
      colorBgLayout: colorPalette.backgrounds.bgSecondary,
      colorBgSpotlight: colorPalette.backgrounds.bgSecondarySubtle,
      colorBgMask: colorPalette.backgrounds.bgOverlay,

      // Border colors
      colorBorder: colorPalette.borders.borderPrimary,
      colorBorderSecondary: colorPalette.borders.borderSecondary,

      // Typography
      fontSizeSM: FONT_SIZE['text-sm'],
      fontSize: FONT_SIZE['text-md'],
      fontSizeLG: FONT_SIZE['text-lg'],
      fontSizeXL: FONT_SIZE['text-xl'],

      lineHeight: LINE_HEIGHT['text-md'] / FONT_SIZE['text-md'],
      lineHeightSM: LINE_HEIGHT['text-sm'] / FONT_SIZE['text-sm'],
      lineHeightLG: LINE_HEIGHT['text-lg'] / FONT_SIZE['text-lg'],

      // Border radius
      borderRadius: RADIUS.md,
      borderRadiusSM: RADIUS.sm,
      borderRadiusLG: RADIUS.lg,
      borderRadiusXS: RADIUS.xs,

      // Spacing - adjust for compact mode
      padding: isCompactMode ? SPACING.lg : SPACING.xl,
      paddingSM: isCompactMode ? SPACING.md : SPACING.lg,
      paddingLG: isCompactMode ? SPACING.xl : SPACING['2xl'],
      paddingXS: isCompactMode ? SPACING.sm : SPACING.md,

      margin: isCompactMode ? SPACING.lg : SPACING.xl,
      marginSM: isCompactMode ? SPACING.md : SPACING.lg,
      marginLG: isCompactMode ? SPACING.xl : SPACING['2xl'],
      marginXS: isCompactMode ? SPACING.sm : SPACING.md,

      // Shadows
      boxShadow: SHADOWS.sm,
      boxShadowSecondary: SHADOWS.xs,
      boxShadowTertiary: SHADOWS.md,

      // Control components - adjust heights for compact mode
      controlHeightXS: isCompactMode ? 20 : 24,
      controlHeightSM: isCompactMode ? 28 : 32,
      controlHeight: isCompactMode ? 36 : 40,
      controlHeightLG: isCompactMode ? 44 : 48,

      // Links
      colorLink: colorPalette.Brand[600],
      colorLinkHover: colorPalette.Brand[700],
      colorLinkActive: colorPalette.Brand[800],
    },
    components: {
      Button: {
        borderRadius: RADIUS.md,
        controlHeightXS: isCompactMode ? 28 : 32,
        controlHeightSM: isCompactMode ? 32 : 36,
        controlHeight: isCompactMode ? 36 : 40,
        controlHeightLG: isCompactMode ? 40 : 44,
        paddingContentHorizontalSM: isCompactMode ? SPACING.md : SPACING.lg,
        paddingContentHorizontal: isCompactMode ? SPACING.lg : 14,
        paddingContentHorizontalLG: SPACING.xl,
      },
      Input: {
        borderRadius: RADIUS.md,
        controlHeightXS: isCompactMode ? 28 : 32,
        controlHeightSM: isCompactMode ? 32 : 36,
        controlHeight: isCompactMode ? 36 : 40,
        controlHeightLG: isCompactMode ? 40 : 44,
        paddingInline: isCompactMode ? SPACING.md : SPACING.lg,
        colorBorder: colorPalette.borders.borderPrimary,
        activeBorderColor: colorPalette.Brand[600],
      },
      Select: {
        borderRadius: RADIUS.md,
        controlHeightXS: isCompactMode ? 28 : 32,
        controlHeightSM: isCompactMode ? 32 : 36,
        controlHeight: isCompactMode ? 36 : 40,
        controlHeightLG: isCompactMode ? 40 : 44,
        colorBorder: colorPalette.borders.borderPrimary,
        activeBorderColor: colorPalette.Brand[600],
      },
      Card: {
        borderRadius: RADIUS.lg,
        paddingLG: isCompactMode ? SPACING['2xl'] : SPACING['3xl'],
        colorBorderSecondary: colorPalette.borders.borderSecondary,
        boxShadow: SHADOWS.sm,
      },
      Table: {
        borderRadius: RADIUS.md,
        colorBorderSecondary: colorPalette.borders.borderSecondary,
        headerBg: colorPalette.backgrounds.bgSecondary,
        headerColor: colorPalette.texts.textSecondary700,
        // Compact mode adjustments
        ...(isCompactMode && {
          cellPaddingBlock: 8,
          cellPaddingInline: 12,
        }),
      },
      Modal: {
        borderRadius: RADIUS.xl,
        paddingLG: isCompactMode ? SPACING['3xl'] : SPACING['4xl'],
        boxShadow: SHADOWS.xl,
      },
      Drawer: {
        paddingLG: isCompactMode ? SPACING['2xl'] : SPACING['3xl'],
        boxShadow: SHADOWS.xl,
      },
      Dropdown: {
        borderRadius: RADIUS.md,
        paddingBlock: isCompactMode ? SPACING.xs : SPACING.sm,
        boxShadow: SHADOWS.lg,
      },
      Menu: {
        borderRadius: RADIUS.md,
        itemBorderRadius: RADIUS.md,
        itemPaddingInline: SPACING.lg,
        itemHeight: 40,
        subMenuItemBorderRadius: RADIUS.md,
      },
      Notification: {
        borderRadius: RADIUS.lg,
        paddingMD: isCompactMode ? SPACING.lg : SPACING.xl,
        boxShadow: SHADOWS.lg,
      },
      Message: {
        borderRadius: RADIUS.md,
        paddingMD: isCompactMode ? SPACING.md : SPACING.lg,
        boxShadow: SHADOWS.md,
      },
      Typography: {
        titleMarginBottom: isCompactMode ? SPACING.md : SPACING.lg,
        titleMarginTop: isCompactMode ? SPACING.md : SPACING.lg,
      },
      Form: {
        itemMarginBottom: isCompactMode ? SPACING.lg : SPACING.xl,
        verticalLabelPadding: `0 0 ${isCompactMode ? SPACING.xs : SPACING.sm}px`,
      },
    },
  };

  const globalToken = theme.getDesignToken(themeConfig);

  // Extended theme object for styled-components
  const extendedTheme = {
    ...globalToken,
    colors: colorPalette,
    fontSize: FONT_SIZE,
    fontWeight: FONT_WEIGHT,
    lineHeight: LINE_HEIGHT,
    radius: RADIUS,
    shadows: SHADOWS,
    spacing: SPACING,
    mode: themeMode,
    isCompact: isCompactMode,
  };

  return (
    <ConfigProvider theme={themeConfig}>
      <ThemeProvider theme={{ ...extendedTheme }}>
        <App>
          {children}
          <GlobalStyles />
        </App>
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default ThemeProviderWrapper;
