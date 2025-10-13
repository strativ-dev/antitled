import { Result } from 'antd';
import React from 'react';

const ResultSuccessDemo: React.FC = () => (
  <Result
    status='success'
    title='Successfully Purchased Cloud Server ECS!'
    subTitle='Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait.'
  />
);

export default ResultSuccessDemo;
