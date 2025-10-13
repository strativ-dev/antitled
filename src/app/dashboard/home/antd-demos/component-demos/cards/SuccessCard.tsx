import { CheckCircleOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import React from 'react';

import { CardSection, StyledCard, Wrapper } from '../../StyledWrappers';
import AlertSectionDemo from '../AlertSectionDemo';
import NotificationButton from '../ButtonDemo/NotificationButton';
import InputDemo from '../InputDemo';
import MessageButton from '../MessageDemo';
import ProgressSuccessDemo from '../ProgressDemo/ProgressSuccessDemo';
import ResultSuccessDemo from '../ResultDemo/ResultSuccessDemo';
import StatusTag from '../StatusTag';
import TimelineDemo from '../TimelineDemo';

const SuccessCard: React.FC = () => {
  return (
    <StyledCard>
      <Flex gap={16} style={{ marginBottom: 16 }}>
        <StatusTag type='success' />
        <InputDemo
          value="I'm the content"
          icon={<CheckCircleOutlined />}
          color='#52c41a'
        />
        <MessageButton type='success' content='这是一条成功消息，会主动消失' />
      </Flex>
      <Wrapper>
        <AlertSectionDemo type='success' /> <ProgressSuccessDemo />
      </Wrapper>

      <CardSection>
        <Flex justify='space-between' wrap gap={16}>
          <NotificationButton type='success' />
          <TimelineDemo type='success' />
        </Flex>

        <Flex style={{ marginTop: 20 }}>
          <ResultSuccessDemo />
        </Flex>
      </CardSection>
    </StyledCard>
  );
};

export default SuccessCard;
