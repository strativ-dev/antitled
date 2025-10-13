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
      <div
        style={{
          display: 'flex',
          gap: 16,
          flexWrap: 'wrap',
          marginBottom: 16,
        }}>
        <DangerButtonDemo />
        <StatusTag type='error' />
        <MessageButton type='error' content='这是一条异常消息，会主动消失' />
      </div>

      <Wrapper>
        <AlertSectionDemo type='error' /> <ProgressErrorDemo />
      </Wrapper>

      <CardSection>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 16,
          }}>
          <NotificationButton type='error' />
          <DropdownDemo />
        </div>
      </CardSection>

      <CardSection>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}>
          <UploadDemo />
          <TimelineDemo type='error' />
        </div>
      </CardSection>
    </StyledCard>
  );
};

export default ErrorCard;
