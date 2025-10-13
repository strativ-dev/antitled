import { Flex, Progress, Space } from 'antd';
import React from 'react';

const ProgressSuccessDemo: React.FC = () => (
  <div style={{ marginLeft: '24px' }}>
    <Space direction='vertical' style={{ width: '100%' }}>
      <Flex wrap gap='small'>
        <Progress
          success={{ percent: 60 }}
          type='dashboard'
          size={100}
          status='success'
        />
        <Progress
          success={{ percent: 70 }}
          type='circle'
          size={100}
          status='success'
        />
      </Flex>
      <Progress success={{ percent: 50 }} size='small' />
    </Space>
  </div>
);

export default ProgressSuccessDemo;
