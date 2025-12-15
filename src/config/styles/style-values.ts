import { COLOR_MODES } from '@/config/styles/color-modes';

export const FONT_SIZE = {
  'text-xxs': 10,
  'text-xs': 12,
  'text-sm': 14,
  'text-md': 16,
  'text-lg': 18,
  'text-xl': 20,
  'display-xs': 24,
  'display-sm': 30,
  'display-md': 36,
  'display-lg': 48,
  'display-xl': 60,
  'display-2xl': 72,
} as const;

const getFontSizesInRem = (fontSizes: typeof FONT_SIZE) => {
  const fontSizesInRem: Record<keyof typeof fontSizes, string> = {} as Record<
    keyof typeof fontSizes,
    string
  >;
  for (const key in fontSizes) {
    const sizeInPx = fontSizes[key as keyof typeof fontSizes];
    const sizeInRem = sizeInPx / 16; // Assuming base font size is 16px
    fontSizesInRem[key as keyof typeof fontSizes] = `${sizeInRem}rem`;
  }
  return fontSizesInRem;
};

export const FONT_SIZE_IN_REM = getFontSizesInRem(FONT_SIZE);
export type FontSizeInRem = typeof FONT_SIZE_IN_REM;

export const LINE_HEIGHT = {
  'text-xxs': 14,
  'text-xs': 18,
  'text-sm': 20,
  'text-md': 24,
  'text-lg': 28,
  'text-xl': 30,
  'display-xs': 32,
  'display-sm': 38,
  'display-md': 44,
  'display-lg': 60,
  'display-xl': 72,
  'display-2xl': 90,
} as const;

export const getLineHeightsInRem = (lineHeights: typeof LINE_HEIGHT) => {
  const lineHeightsInRem: Record<keyof typeof lineHeights, string> =
    {} as Record<keyof typeof lineHeights, string>;
  for (const key in lineHeights) {
    const sizeInPx = lineHeights[key as keyof typeof lineHeights];
    const sizeInRem = sizeInPx / 16; // Assuming base font size is 16px
    lineHeightsInRem[key as keyof typeof lineHeights] = `${sizeInRem}rem`;
  }
  return lineHeightsInRem;
};

export const LINE_HEIGHT_IN_REM = getLineHeightsInRem(LINE_HEIGHT);
export type LineHeightInRem = typeof LINE_HEIGHT_IN_REM;

export const RADIUS = {
  none: 0,
  xxs: 2,
  xs: 4,
  sm: 6,
  md: 8,
  lg: 10,
  xl: 12,
  '2xl': 16,
  '3xl': 20,
  '4xl': 24,
  full: 9999,
} as const;

export const getRadiusInRem = (radius: typeof RADIUS) => {
  const radiusInRem: Record<keyof typeof radius, string> = {} as Record<
    keyof typeof radius,
    string
  >;
  for (const key in radius) {
    const sizeInPx = radius[key as keyof typeof radius];
    const sizeInRem = sizeInPx / 16; // Assuming base font size is 16px
    radiusInRem[key as keyof typeof radius] = `${sizeInRem}rem`;
  }
  return radiusInRem;
};

export const RADIUS_IN_REM = getRadiusInRem(RADIUS);
export type RadiusInRem = typeof RADIUS_IN_REM;

export const SHADOWS = {
  xs: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
  sm: '0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)',
  md: '0px 4px 8px -2px rgba(16, 24, 40, 0.10), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
  lg: '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
  xl: '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
  '2xl': '0px 24px 48px -12px rgba(16, 24, 40, 0.18)',
  '3xl': '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',
} as const;

export const SPACING = {
  none: 0,
  xxs: 2,
  xs: 4,
  sm: 6,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 20,
  '3xl': 24,
  '4xl': 32,
  '5xl': 40,
  '6xl': 48,
  '7xl': 64,
  '8xl': 80,
  '9xl': 96,
  '10xl': 128,
  '11xl': 160,
} as const;

export const FONT_WEIGHT = {
  thin: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const;

export type FontSize = typeof FONT_SIZE;
export type LineHeight = typeof LINE_HEIGHT;
export type Radius = typeof RADIUS;
export type Shadow = typeof SHADOWS;
export type Spacing = typeof SPACING;
export type FontWeight = typeof FONT_WEIGHT;

export type TextSizeVariant = keyof typeof FONT_SIZE;
// Combined text variant: size-weight (e.g., 'text-md-semibold', 'display-lg-bold')
export type TextVariant = `${TextSizeVariant}-${WeightVariant}`;

export type WeightVariant = keyof typeof FONT_WEIGHT;
export type LineHeightVariant = keyof typeof LINE_HEIGHT;

export type TextColorVariant = keyof typeof COLOR_MODES.light.texts;

export const SmallMobileBreakpoint = 480;
export const MobileBreakpoint = 768;
export const TabletBreakpoint = 992;
export const LaptopBreakpoint = 1024;
export const DesktopBreakpoint = 1440;

export const Breakpoint = {
  smallMobile: `@media(max-width: ${SmallMobileBreakpoint}px)`,
  mobile: `@media(max-width: ${MobileBreakpoint}px)`,
  tablet: `@media(max-width: ${TabletBreakpoint}px)`,
  laptop: `@media(max-width: ${LaptopBreakpoint}px)`,
  desktop: `@media(max-width: ${DesktopBreakpoint}px)`,
} as const;
