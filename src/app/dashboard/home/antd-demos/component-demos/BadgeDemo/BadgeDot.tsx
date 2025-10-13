import { Badge, Space } from 'antd';
import React from 'react';

const BadgeDot: React.FC = () => (
  <>
    <Space direction='vertical'>
      <Badge status='warning' text='Warning' />
    </Space>
  </>
);

export default BadgeDot;
