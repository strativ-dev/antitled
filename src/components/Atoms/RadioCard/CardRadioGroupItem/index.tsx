import { Card } from 'antd';
import type { CardProps } from 'antd/es/card';
import clsx from 'clsx';
import React from 'react';

import { RadioGroupWrapper } from './style';

export type RadioGroupSize = 'sm' | 'md';

export type RadioGroupItemProps = Omit<CardProps, 'size'> & {
  value?: string | number;
  size?: RadioGroupSize;
  isSelected?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  description?: React.ReactNode;
  headerLeft?: React.ReactNode;
  headerRight?: React.ReactNode;
  bodyLeft?: React.ReactNode;
  bodyRight?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export type RadioGroupMetaProps = React.ComponentProps<typeof Card.Meta>;

function CardRadioGroupItems(props: RadioGroupItemProps) {
  const {
    className,
    size = 'md',
    isSelected = false,
    disabled,
    children,
    description,
    title,
    headerLeft,
    headerRight,
    bodyLeft,
    bodyRight,
    onClick,
    ...rest
  } = props;

  const hasHead = Boolean(title || headerRight || headerLeft);

  const headerContent =
    title || headerLeft ? (
      <div className='radio-group-header-content'>
        {headerLeft && (
          <div className='radio-group-header-left'>{headerLeft}</div>
        )}
        {title && <span className='radio-group-title-text'>{title}</span>}
      </div>
    ) : null;

  return (
    <RadioGroupWrapper
      $size={size}
      $isSelected={isSelected}
      $hasHead={hasHead}
      $disabled={disabled}
      onClick={onClick}
      className={clsx('radio-group', className)}>
      <Card
        {...rest}
        title={headerContent}
        extra={headerRight}
        className='radio-group-card'>
        <div className='radio-group-body-container'>
          {bodyLeft && <div className='radio-group-body-left'>{bodyLeft}</div>}
          <div className='radio-group-body-center'>
            {children}
            {description && (
              <div className='radio-group-description'>{description}</div>
            )}
          </div>
          {bodyRight && (
            <div className='radio-group-body-right'>{bodyRight}</div>
          )}
        </div>
      </Card>
    </RadioGroupWrapper>
  );
}

function RadioGroupMeta(props: RadioGroupMetaProps) {
  return <Card.Meta {...props} />;
}

export const CardRadioGroupItem = Object.assign(CardRadioGroupItems, {
  Meta: RadioGroupMeta,
  Grid: Card.Grid,
});
