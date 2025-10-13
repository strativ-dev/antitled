import { Flex } from 'antd';
import React from 'react';

import { CardSection, StyledCard } from '../../StyledWrappers';
import AlertSectionDemo from '../AlertSectionDemo';
import BadgeDot from '../BadgeDemo/BadgeDot';
import NotificationButton from '../ButtonDemo/NotificationButton';
import ConfirmModalDemo from '../ConfirmModalDemo';
import DeletePopConfirm from '../DeletePopconfirm';
import InputDemo from '../InputDemo';
import MessageButton from '../MessageDemo';
import ResultWarningDemo from '../ResultDemo/ResultWarningDemo';
import StatusTag from '../StatusTag';
import TypographyDemo from '../TypographyDemo';

const WarningCard: React.FC = () => {
  return (
    <StyledCard>
      <Flex gap={16} style={{ marginBottom: 16 }}>
        <TypographyDemo
          text='Warning Text'
          useTitle
          level={4}
          height='32px'
          width={'30%'}
        />
        <InputDemo value='3' />
        <MessageButton type='warning' content='这是一条警告消息，会主动消失' />
      </Flex>

      <Flex wrap justify='space-between' align='center'>
        <AlertSectionDemo type='warning' /> <DeletePopConfirm />
        <BadgeDot />
        <StatusTag type='warning' />
        <TypographyDemo text='Warning Text' useTitle level={5} />
      </Flex>

      <CardSection>
        <Flex gap={16}>
          <NotificationButton type='warning' />
          <ConfirmModalDemo />
        </Flex>
      </CardSection>

      <Flex style={{ marginTop: 20 }}>
        <ResultWarningDemo />
      </Flex>
    </StyledCard>
  );
};

export default WarningCard;
