import React from 'react';

import { CardSection, StyledCard } from '../../StyledWrappers';
import AlertSectionDemo from '../AlertSectionDemo';
import BadgeDot from '../BadgeDemo/BadgeDot';
import NotificationButton from '../ButtonDemo/NotificationButton';
import ConfirmModalDemo from '../ConfirmModalDemo';
import DeletePopconfirm from '../DeletePopconfirm';
import InputDemo from '../InputDemo';
import MessageButton from '../MessageDemo';
import ResultWarningDemo from '../ResultDemo/ResultWarningDemo';
import StatusTag from '../StatusTag';
import TypographyDemo from '../TypographyDemo';

const WarningCard: React.FC = () => {
  return (
    <StyledCard>
      <div
        style={{
          display: 'flex',
          gap: 16,
          marginBottom: 16,
        }}>
        <TypographyDemo
          text='Warning Text'
          useTitle
          level={4}
          height='32px'
          width={'30%'}
        />
        <InputDemo value='3' />
        <MessageButton type='warning' content='这是一条警告消息，会主动消失' />
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <AlertSectionDemo type='warning' /> <DeletePopconfirm />
        <BadgeDot />
        <StatusTag type='warning' />
        <TypographyDemo text='Warning Text' useTitle level={5} />
      </div>

      <CardSection>
        <div
          style={{
            display: 'flex',
            gap: 16,
          }}>
          <NotificationButton type='warning' />
          <ConfirmModalDemo />
        </div>
      </CardSection>

      <div style={{ marginTop: 20 }}>
        <ResultWarningDemo />
      </div>
    </StyledCard>
  );
};

export default WarningCard;
