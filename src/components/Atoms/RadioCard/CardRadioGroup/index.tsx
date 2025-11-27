import React, { useState } from 'react';
import styled from 'styled-components';

import { RadioGroupItemProps } from '../CardRadioGroupItem';

export type CardRadioGroupProps = {
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (value: string | number) => void;
  children?: React.ReactNode;
  disabled?: boolean;
  size?: 'sm' | 'md';
  gap?: string;
};

export const CardRadioGroup = React.forwardRef<
  HTMLDivElement,
  CardRadioGroupProps
>(
  (
    {
      value: controlledValue,
      defaultValue,
      onChange,
      children,
      disabled = false,
      size = 'md',
      gap = '0.75rem',
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const value = controlledValue ?? internalValue;

    const handleSelect = (val?: string | number) => {
      if (disabled || val == null) return;

      setInternalValue(val);
      onChange?.(val);
    };

    return (
      <Wrapper ref={ref} $gap={gap}>
        {React.Children.map(children, (child) => {
          if (!React.isValidElement<RadioGroupItemProps>(child)) return child;

          const { value: itemValue } = child.props;

          return React.cloneElement(child, {
            size,
            disabled: disabled || child.props.disabled,
            isSelected: itemValue === value,
            onClick: (e: React.MouseEvent<HTMLDivElement>) => {
              handleSelect(itemValue);
              child.props.onClick?.(e);
            },
          });
        })}
      </Wrapper>
    );
  }
);

const Wrapper = styled.div<{ $gap: string }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap};
  width: 100%;
`;

CardRadioGroup.displayName = 'CardRadioGroup';
