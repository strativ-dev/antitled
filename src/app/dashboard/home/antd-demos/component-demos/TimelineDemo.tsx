import { Timeline } from 'antd';
import React from 'react';

interface TimelineDemoProps {
  type?: 'default' | 'success' | 'error';
  items?: { text: string }[];
}

const TimelineDemo: React.FC<TimelineDemoProps> = ({
  type = 'default',
  items,
}) => {
  const defaultItems = [
    { text: 'Create a services site 2015-09-01' },
    { text: 'Solve initial network problems 2015-09-02' },
    { text: 'Technical testing 2015-09-03' },
    { text: 'Testing passed 2015-09-03' },
  ];

  const data = items || defaultItems;

  const colorMap = {
    default: 'blue',
    success: 'green',
    error: 'red',
  } as const;

  return (
    <Timeline
      items={data.map((item) => ({
        color: colorMap[type],
        children: item.text,
      }))}
    />
  );
};

export default TimelineDemo;
