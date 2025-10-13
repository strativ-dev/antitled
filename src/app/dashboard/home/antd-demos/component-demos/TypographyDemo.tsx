import { Typography } from 'antd';
import React from 'react';

const { Text, Title } = Typography;

interface TypographyDemoProps {
  text: string;
  level?: 4 | 5;
  useTitle?: boolean;
  width?: string | number;
  height?: string | number;
}

const TypographyDemo: React.FC<TypographyDemoProps> = ({
  text,
  level,
  useTitle = false,
  width,
  height,
}) => {
  const commonStyle = {
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    height,
    width,
  };

  if (useTitle) {
    return (
      <Title level={level} type='warning' style={{ ...commonStyle }}>
        {text}
      </Title>
    );
  }

  return (
    <Text type='warning' style={{ ...commonStyle }}>
      {text}
    </Text>
  );
};

export default TypographyDemo;
