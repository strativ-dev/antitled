import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import type { CheckboxGroupProps } from 'antd/es/checkbox';
import React, { useState } from 'react';

const options: CheckboxGroupProps<string>['options'] = [
  { label: 'Apple', value: 'Apple', className: 'label-1' },
  { label: 'Pear', value: 'Pear', className: 'label-2' },
];

const optionsWithDisabled: CheckboxGroupProps<string>['options'] = [
  { label: 'Hangzhou', value: 'Hangzhou', className: 'label-1' },
  { label: 'Shanghai', value: 'Shanghai', className: 'label-2' },
];

const RadioButtonDemo: React.FC = () => {
  const [value1, setValue1] = useState('Apple');
  const [value2, setValue2] = useState('Hangzhou');

  const onChange3 = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio3 checked', value);
    setValue1(value);
  };

  const onChange4 = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio4 checked', value);
    setValue2(value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
      <Radio.Group
        options={optionsWithDisabled}
        onChange={onChange4}
        value={value2}
        optionType='button'
        buttonStyle='solid'
      />
      <Radio.Group
        options={options}
        onChange={onChange3}
        value={value1}
        optionType='button'
      />
    </div>
  );
};

export default RadioButtonDemo;
