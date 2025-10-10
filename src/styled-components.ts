import { GlobalToken } from 'antd';
import 'styled-components';

import {
  ColorPalette,
  FontSize,
  FontWeight,
  LineHeight,
  Radius,
  Shadow,
  Spacing,
} from '@/config/styles';

declare module 'styled-components' {
   
  export interface DefaultTheme extends GlobalToken {
    mode?: 'dark' | 'light' | 'system';
    colors: ColorPalette;
    shadows: Shadow;
    fontSize: FontSize;
    fontWeight: FontWeight;
    lineHeight: LineHeight;
    radius: Radius;
    spacing: Spacing;
    isCompact: boolean;
  }
}
