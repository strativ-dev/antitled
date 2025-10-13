import { Input } from 'antd';
import React from 'react';

type SuccessInputProps = {
  value?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  color?: string;

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputDemo: React.FC<SuccessInputProps> = ({
  value = "I'm the content",
  placeholder = 'Enter text',
  icon,
  color = '#52c41a',

  onChange,
}) => {
  return (
    <Input
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      suffix={
        icon
          ? React.cloneElement(icon as React.ReactElement, {
              style: { color },
            })
          : undefined
      }
    />
  );
};

export default InputDemo;
