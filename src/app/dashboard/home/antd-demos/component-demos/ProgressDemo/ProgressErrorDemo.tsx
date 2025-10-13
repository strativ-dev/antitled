import { Flex, Progress, Space } from 'antd';
import React from 'react';

const ProgressErrorDemo: React.FC = () => (
  <div>
    <Space direction='vertical' style={{ width: '100%' }}>
      <Flex wrap gap='small'>
        <Progress percent={60} type='dashboard' size={100} status='exception' />

        <Progress type='circle' percent={70} size={100} status='exception' />
      </Flex>
      <Progress percent={50} size='small' status='exception' />
    </Space>
  </div>
);

export default ProgressErrorDemo;
