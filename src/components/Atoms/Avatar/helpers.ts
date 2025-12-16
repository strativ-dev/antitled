import { AvatarSize } from './types';

export const getSize = (size?: AvatarSize): number => {
  if (typeof size === 'number') {
    return size;
  }

  switch (size) {
    case 'xs':
      return 24;
    case 'sm':
      return 32;
    case 'md':
      return 40;
    case 'lg':
      return 48;
    case 'xl':
      return 56;
    case '2xl':
      return 64;
    default:
      return 40;
  }
};

export const getGroupAvatarTextSize = (
  size?: number
): 'text-xs' | 'text-sm' | 'text-md' => {
  if (!size) return 'text-sm';

  if (size <= 30) {
    return 'text-xs';
  } else if (size <= 40) {
    return 'text-sm';
  } else {
    return 'text-md';
  }
};
