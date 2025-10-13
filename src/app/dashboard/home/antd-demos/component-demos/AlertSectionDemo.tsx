import { Alert, Space } from 'antd';
import React from 'react';

interface AlertSectionDemoProps {
  type?: 'success' | 'warning' | 'error';
  title?: string;
  description?: string;
  width?: string | number;
}

const AlertSectionDemo: React.FC<AlertSectionDemoProps> = ({
  type = 'success',
  title,
  description,
  width = '60%',
}) => {
  const defaultTitleMap = {
    success: 'Success Tips',
    warning: 'Warning',
    error: 'Error',
  } as const;

  const defaultDescriptionMap = {
    success: 'Detailed description and advice about successful copywriting.',
    warning: 'This is a warning notice about copywriting.',
    error: 'This is an error message about copywriting.',
  } as const;

  return (
    <div style={{ width, marginRight: '24px' }}>
      <Space direction='vertical' style={{ width: '100%' }}>
        <Alert message={title || defaultTitleMap[type]} type={type} showIcon />
        <Alert
          message={title || defaultTitleMap[type]}
          description={description || defaultDescriptionMap[type]}
          type={type}
          showIcon
          closable={type === 'warning'}
        />
      </Space>
    </div>
  );
};

export default AlertSectionDemo;
