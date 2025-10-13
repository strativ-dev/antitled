import { ClockCircleFilled } from '@ant-design/icons';
import { Avatar, Badge, Space } from 'antd';
import React from 'react';

const BadgeDemo: React.FC = () => (
  <Space size='middle'>
    <Badge count={5}>
      <Avatar shape='square' size='large' />
    </Badge>
    <Badge count={0} showZero>
      <Avatar shape='square' size='large' />
    </Badge>
    <Badge count={<ClockCircleFilled style={{ color: '#f5222d' }} />}>
      <Avatar shape='square' size='large' />
    </Badge>
  </Space>
);

export default BadgeDemo;
