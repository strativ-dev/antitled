import { GlobalToken } from 'antd';
import 'styled-components';

import {
  ColorPalette,
  FontSizeInRem,
  FontWeight,
  LineHeightInRem,
  RadiusInRem,
  Shadow,
  Spacing,
} from '@/config/styles';

declare module 'styled-components' {
  export interface DefaultTheme extends GlobalToken {
    mode?: 'dark' | 'light' | 'system';
    colors: ColorPalette;
    shadows: Shadow;
    fontSize: FontSizeInRem;
    fontWeight: FontWeight;
    lineHeight: LineHeightInRem;
    radius: RadiusInRem;
    spacing: Spacing;
    isCompact: boolean;
  }
}
