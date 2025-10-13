import { Steps } from 'antd';
import React from 'react';

interface StepsDemoProps {
  current?: number;
}

const description = 'This is a description.';

const StepsDemo: React.FC<StepsDemoProps> = ({ current = 0 }) => (
  <Steps
    current={current}
    items={[
      { title: 'Finished', description },
      { title: 'In Progress', description },
      { title: 'Waiting', description },
    ]}
  />
);

export default StepsDemo;
