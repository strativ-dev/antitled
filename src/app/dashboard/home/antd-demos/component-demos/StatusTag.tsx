import { Tag, Flex } from 'antd';
import React from 'react';

interface StatusTagProps {
  type: 'success' | 'error' | 'warning';
}

const StatusTag: React.FC<StatusTagProps> = ({ type }) => {
  return (
    <Flex gap='4px 0' wrap align='center'>
      <Tag color={type} style={{ height: 22, textTransform: 'capitalize' }}>
        {type}
      </Tag>
    </Flex>
  );
};

export default StatusTag;
