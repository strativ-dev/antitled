import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import {
  COLOR_PALLETTE,
  DARK_THEME_COLORS,
  ColorPalette,
} from '@/config/styles';
import { LANGUAGE_OPTIONS } from '@/lib/utils/constants';

// Helper function to get theme-appropriate color palette
const getThemeColorPalette = (
  theme: 'light' | 'dark',
  baseColorPalette: ColorPalette
): ColorPalette => {
  if (theme === 'dark') {
    return {
      ...baseColorPalette,
      texts: DARK_THEME_COLORS.texts,
      borders: DARK_THEME_COLORS.borders,
      foregrounds: DARK_THEME_COLORS.foregrounds,
      backgrounds: DARK_THEME_COLORS.backgrounds,
      shadows: DARK_THEME_COLORS.shadows,
    };
  }

  return {
    ...baseColorPalette,
    texts: COLOR_PALLETTE.texts,
    borders: COLOR_PALLETTE.borders,
    foregrounds: COLOR_PALLETTE.foregrounds,
    backgrounds: COLOR_PALLETTE.backgrounds,
    shadows: COLOR_PALLETTE.shadows,
  };
};

interface AppState {
  theme: 'light' | 'dark' | 'system';
  language: keyof typeof LANGUAGE_OPTIONS;
  colorPalette: ColorPalette;
  setTheme: (theme: 'light' | 'dark') => void;
  setLanguage: (language: AppState['language']) => void;
  setColorPalette: (colorPalette: Partial<ColorPalette>) => void;
  resetColorPalette: () => void;
}

const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set, get) => ({
        language: LANGUAGE_OPTIONS.en,
        colorPalette: COLOR_PALLETTE,
        setLanguage: (language) => set({ language }),
        setColorPalette: (partialColorPalette: Partial<ColorPalette>) =>
          set((state) => ({
            colorPalette: {
              ...state.colorPalette,
              ...partialColorPalette,
              // Deep merge for nested objects
              ...(partialColorPalette.texts && {
                texts: {
                  ...state.colorPalette.texts,
                  ...partialColorPalette.texts,
                },
              }),
              ...(partialColorPalette.borders && {
                borders: {
                  ...state.colorPalette.borders,
                  ...partialColorPalette.borders,
                },
              }),
              ...(partialColorPalette.foregrounds && {
                foregrounds: {
                  ...state.colorPalette.foregrounds,
                  ...partialColorPalette.foregrounds,
                },
              }),
              ...(partialColorPalette.backgrounds && {
                backgrounds: {
                  ...state.colorPalette.backgrounds,
                  ...partialColorPalette.backgrounds,
                },
              }),
              ...(partialColorPalette.shadows && {
                shadows: {
                  ...state.colorPalette.shadows,
                  ...partialColorPalette.shadows,
                },
              }),
            },
          })),
        resetColorPalette: () => {
          const currentTheme = get().theme;
          const newPalette = getThemeColorPalette(
            currentTheme === 'system'
              ? 'light'
              : (currentTheme as 'light' | 'dark'),
            COLOR_PALLETTE
          );
          set({ colorPalette: newPalette });
        },
        theme: 'system',
        setTheme: (theme: 'light' | 'dark') => {
          set((state) => ({
            theme,
            colorPalette: getThemeColorPalette(theme, state.colorPalette),
          }));
        },
      }),
      { name: 'appStore' }
    ),
    { store: 'AppStore', name: 'App Store' }
  )
);

export default useAppStore;
