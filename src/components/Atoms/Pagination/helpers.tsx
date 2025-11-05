import { ArrowLeft, ArrowRight } from '@untitledui/icons';

import { PaginationButton } from './styles';
import { NavButtonProps } from './types';

export const renderPrevButton = ({
  variant,
  size,
  nextPrevType,
  hideNextPrevText,
  buttonText,
}: NavButtonProps) => {
  const displayText = hideNextPrevText ? '' : buttonText;
  const effectiveNextPrevType =
    variant === 'button-group' ? 'bordered' : nextPrevType;

  return (
    <PaginationButton
      $variant={variant}
      $size={size}
      $iconOnly={hideNextPrevText}
      $nextPrevType={effectiveNextPrevType}>
      <ArrowLeft size={20} className='arrow-icon' />
      <span style={{ paddingRight: hideNextPrevText ? 0 : '.25rem' }}>
        {displayText}
      </span>
    </PaginationButton>
  );
};

export const renderNextButton = ({
  variant,
  size,
  nextPrevType,
  hideNextPrevText,
  buttonText,
}: NavButtonProps) => {
  const displayText = hideNextPrevText ? '' : buttonText;
  const effectiveNextPrevType =
    variant === 'button-group' ? 'bordered' : nextPrevType;

  return (
    <PaginationButton
      $variant={variant}
      $size={size}
      $iconOnly={hideNextPrevText}
      $nextPrevType={effectiveNextPrevType}
      $isNext>
      <span style={{ paddingLeft: hideNextPrevText ? 0 : '.25rem' }}>
        {displayText}
      </span>
      <ArrowRight size={20} className='arrow-icon' />
    </PaginationButton>
  );
};
