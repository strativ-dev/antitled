import { CheckCircleOutlined } from '@ant-design/icons';
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
      <div
        style={{
          display: 'flex',
          gap: 16,
          marginBottom: 16,
        }}>
        <StatusTag type='success' />
        <InputDemo
          value="I'm the content"
          icon={<CheckCircleOutlined />}
          color='#52c41a'
        />
        <MessageButton type='success' content='这是一条成功消息，会主动消失' />
      </div>

      <Wrapper>
        <AlertSectionDemo type='success' /> <ProgressSuccessDemo />
      </Wrapper>

      <CardSection>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
          }}>
          <NotificationButton type='success' />
          <TimelineDemo type='success' />
        </div>

        <div style={{ marginTop: 20 }}>
          <ResultSuccessDemo />
        </div>
      </CardSection>
    </StyledCard>
  );
};

export default SuccessCard;
