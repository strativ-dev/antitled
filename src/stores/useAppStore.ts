import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { COLOR_MODES, COLOR_PALLETTE, ColorPalette } from '@/config/styles';
import { LANGUAGE_OPTIONS } from '@/lib/utils/constants';

// Helper function to get theme-appropriate color palette
const getThemeColorPalette = (
  theme: 'light' | 'dark',
  baseColorPalette: ColorPalette
): ColorPalette => {
  if (theme === 'dark') {
    return {
      ...baseColorPalette,
      texts: COLOR_MODES.dark.texts,
      borders: COLOR_MODES.dark.borders,
      foregrounds: COLOR_MODES.dark.foregrounds,
      backgrounds: COLOR_MODES.dark.backgrounds,
      shadows: COLOR_MODES.dark.shadows,
    };
  }

  return {
    ...baseColorPalette,
    texts: COLOR_MODES.light.texts,
    borders: COLOR_MODES.light.borders,
    foregrounds: COLOR_MODES.light.foregrounds,
    backgrounds: COLOR_MODES.light.backgrounds,
    shadows: COLOR_MODES.light.shadows,
  };
};

interface AppState {
  theme: 'light' | 'dark' | 'system';
  language: keyof typeof LANGUAGE_OPTIONS;
  colorPalette: ColorPalette;
  setTheme: (theme: 'light' | 'dark') => void;
  setLanguage: (language: AppState['language']) => void;
}

const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        language: LANGUAGE_OPTIONS.en,
        colorPalette: COLOR_PALLETTE,
        setLanguage: (language) => set({ language }, false, 'setLanguage'),
        theme: 'system',
        setTheme: (theme: 'light' | 'dark') => {
          set(
            (state) => ({
              theme,
              colorPalette: getThemeColorPalette(theme, state.colorPalette),
            }),
            false,
            'setTheme'
          );
        },
      }),
      { name: 'appStore' }
    ),
    { store: 'AppStore', name: '' }
  )
);

export default useAppStore;
