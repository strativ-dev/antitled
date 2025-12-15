/**
 * Typography helper for styled-components
 *
 * Usage:
 *   ${typography('text-md-semibold')}
 *   ${typography('display-lg-bold')}
 *   ${typography('text-sm')}  // defaults to 'regular' weight
 *
 * Or with separate arguments:
 *   ${typography('text-md', 'semibold')}
 *   ${typography('display-lg', 'bold')}
 */
import {
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  TextSizeVariant,
  TextVariant,
  WeightVariant,
} from '@/config/styles';

export const typography = (
  variant: TextVariant | TextSizeVariant,
  weight?: WeightVariant
): string => {
  let size: TextSizeVariant;
  let fontWeight: WeightVariant;

  // Check if variant contains weight (e.g., 'text-md-semibold')
  const parts = variant.split('-');

  if (parts.length === 3) {
    // Format: 'text-md-semibold' or 'display-lg-bold'
    size = `${parts[0]}-${parts[1]}` as TextSizeVariant;
    fontWeight = parts[2] as WeightVariant;
  } else if (parts.length === 2) {
    // Format: 'text-md' or 'display-lg' (size only)
    size = variant as TextSizeVariant;
    fontWeight = weight || 'regular';
  } else {
    // Fallback
    size = 'text-md';
    fontWeight = 'regular';
  }

  const fontSize = FONT_SIZE[size];
  const lineHeight = LINE_HEIGHT[size];
  const fontWeightValue = FONT_WEIGHT[fontWeight];

  return `
    font-size: ${fontSize}px;
    line-height: ${lineHeight}px;
    font-weight: ${fontWeightValue};
  `;
};

/**
 * Get individual typography values (useful for inline styles or non-styled-components)
 */
export const getTypographyValues = (
  variant: TextVariant | TextSizeVariant,
  weight?: WeightVariant
) => {
  const parts = variant.split('-');
  let size: TextSizeVariant;
  let fontWeight: WeightVariant;

  if (parts.length === 3) {
    size = `${parts[0]}-${parts[1]}` as TextSizeVariant;
    fontWeight = parts[2] as WeightVariant;
  } else {
    size = variant as TextSizeVariant;
    fontWeight = weight || 'regular';
  }

  return {
    fontSize: FONT_SIZE[size],
    lineHeight: LINE_HEIGHT[size],
    fontWeight: FONT_WEIGHT[fontWeight],
  };
};
