import { SearchOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import React from 'react';

import CustomSelect from '../CustomSelectDemo';

const ButtonsDemo: React.FC = () => {
  return (
    <div>
      <Space wrap style={{ marginRight: '8px' }}>
        <Button type='primary'>Primary Button</Button>

        <Button type='primary' shape='circle' icon={<SearchOutlined />} />
        <Button type='primary' shape='circle'>
          A
        </Button>
        <Button icon={<SearchOutlined />}>Search</Button>
      </Space>
      <Space wrap>
        <CustomSelect />
      </Space>
    </div>
  );
};

export default ButtonsDemo;
