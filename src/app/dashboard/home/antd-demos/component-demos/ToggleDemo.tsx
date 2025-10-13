import { Radio, Checkbox, Switch, Space } from 'antd';
import React, { useState } from 'react';

const ToggleDemo: React.FC = () => {
  const [radioValue, setRadioValue] = useState(1);

  const [checkedList, setCheckedList] = useState<string[]>([]);

  const [switchChecked, setSwitchChecked] = useState(false);

  const checkboxOptions = ['Apple'];

  return (
    <>
      <Radio.Group
        onChange={(e) => setRadioValue(e.target.value)}
        value={radioValue}>
        <Space direction='vertical'>
          <Radio value={1}>Option A</Radio>
        </Space>
      </Radio.Group>
      <Checkbox.Group
        options={checkboxOptions}
        value={checkedList}
        onChange={(list) => setCheckedList(list)}
      />
      <Switch
        checked={switchChecked}
        onChange={setSwitchChecked}
        size='small'
      />
    </>
  );
};

export default ToggleDemo;
