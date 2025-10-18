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
  const { colorPalette, theme: themeMode, setTheme } = useAppStore();

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
      controlOutline: colorPalette.borders.borderBrand,

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
      padding: SPACING.xl,
      paddingSM: SPACING.lg,
      paddingLG: SPACING['2xl'],
      paddingXS: SPACING.md,

      margin: SPACING.xl,
      marginSM: SPACING.lg,
      marginLG: SPACING['2xl'],
      marginXS: SPACING.md,

      // Shadows
      boxShadow: SHADOWS.sm,
      boxShadowSecondary: SHADOWS.xs,
      boxShadowTertiary: SHADOWS.md,

      controlHeightXS: 32,
      controlHeightSM: 36,
      controlHeight: 40,
      controlHeightLG: 44,

      // Links
      colorLink: colorPalette.Brand[600],
      colorLinkHover: colorPalette.Brand[700],
      colorLinkActive: colorPalette.Brand[800],

      borderRadiusOuter: RADIUS.md,
    },

    components: {
      Input: {
        borderRadius: RADIUS.md,
        activeBorderColor: colorPalette.borders.borderBrand,
        boxShadow: colorPalette.shadows.xs,
        colorTextPlaceholder: colorPalette.texts.textPlaceholder,
        colorTextLabel: colorPalette.texts.textSecondary700,
        colorIcon: colorPalette.foregrounds['fgQuaternary400'],
        colorText: colorPalette.texts.textPrimary900,
        colorErrorBorder: colorPalette.borders.borderErrorSubtle,
        colorErrorBorderHover: colorPalette.borders.borderError,
        inputFontSizeSM: FONT_SIZE['text-sm'],
        inputFontSize: FONT_SIZE['text-md'],
        inputFontSizeLG: FONT_SIZE['text-md'],
        paddingInlineSM: SPACING.lg,
        paddingInline: SPACING.lg,
        paddingInlineLG: SPACING.lg,
        colorBgContainerDisabled: colorPalette.backgrounds.bgDisabledSubtle,
      },
      Select: {
        boxShadowSecondary: SHADOWS['xl'],
        activeBorderColor: colorPalette.borders.borderBrand,
        boxShadow: colorPalette.shadows.xs,
        colorTextPlaceholder: colorPalette.texts.textPlaceholder,
        colorTextLabel: colorPalette.texts.textSecondary700,
        colorIcon: colorPalette.foregrounds['fgQuaternary400'],
        colorText: colorPalette.texts.textPrimary900,
        colorErrorBorder: colorPalette.borders.borderErrorSubtle,
        colorErrorBorderHover: colorPalette.borders.borderError,
        colorBgContainerDisabled: colorPalette.backgrounds.bgDisabledSubtle,
        optionFontSize: FONT_SIZE['text-md'],
        controlPaddingHorizontalSM: SPACING.lg,
        fontSizeLG: FONT_SIZE['text-md'],
      },
      Card: {
        borderRadius: RADIUS.lg,
        paddingLG: SPACING['3xl'],
        colorBorderSecondary: colorPalette.borders.borderSecondary,
        boxShadow: SHADOWS.sm,
      },
      Table: {
        borderRadius: RADIUS.md,
        colorBorderSecondary: colorPalette.borders.borderSecondary,
        headerBg: colorPalette.backgrounds.bgSecondary,
        headerColor: colorPalette.texts.textSecondary700,
      },
      Modal: {
        borderRadius: RADIUS.xl,
        paddingLG: SPACING['4xl'],
        boxShadow: SHADOWS.xl,
      },
      Drawer: {
        paddingLG: SPACING['3xl'],
        boxShadow: SHADOWS.xl,
      },
      Dropdown: {
        borderRadius: RADIUS.md,
        paddingBlock: SPACING.sm,
        // boxShadow: SHADOWS.lg,
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
        paddingMD: SPACING.xl,
        boxShadow: SHADOWS.lg,
      },
      Message: {
        borderRadius: RADIUS.md,
        paddingMD: SPACING.lg,
        boxShadow: SHADOWS.md,
      },
      Typography: {
        titleMarginBottom: SPACING.lg,
        titleMarginTop: SPACING.lg,
      },
      Form: {
        itemMarginBottom: SPACING.xl,
        verticalLabelPadding: `0 0 ${SPACING.sm}px`,
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
    isCompact: false,
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
