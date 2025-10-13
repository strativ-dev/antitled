import { Flex } from 'antd';
import React from 'react';

import { CardSection, StyledCard, Wrapper } from '../../StyledWrappers';
import AlertSectionDemo from '../AlertSectionDemo';
import DangerButtonDemo from '../ButtonDemo/DangerButtonDemo';
import NotificationButton from '../ButtonDemo/NotificationButton';
import DropdownDemo from '../DropdownDemo';
import MessageButton from '../MessageDemo';
import ProgressErrorDemo from '../ProgressDemo/ProgressErrorDemo';
import StatusTag from '../StatusTag';
import TimelineDemo from '../TimelineDemo';
import UploadDemo from '../UploadDemo';

const ErrorCard: React.FC = () => {
  return (
    <StyledCard>
      <Flex gap={16} wrap style={{ marginBottom: 16 }}>
        <DangerButtonDemo />
        <StatusTag type='error' />
        <MessageButton type='error' content='这是一条异常消息，会主动消失' />
      </Flex>

      <Wrapper>
        <AlertSectionDemo type='error' /> <ProgressErrorDemo />
      </Wrapper>

      <CardSection>
        <Flex justify='space-between' wrap align='center' gap={16}>
          <NotificationButton type='error' />
          <DropdownDemo />
        </Flex>
      </CardSection>

      <CardSection>
        <Flex justify='space-between' wrap>
          <UploadDemo />
          <TimelineDemo type='error' />
        </Flex>
      </CardSection>
    </StyledCard>
  );
};

export default ErrorCard;
