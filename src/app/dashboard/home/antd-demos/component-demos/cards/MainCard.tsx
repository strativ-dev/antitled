import { Flex } from 'antd';
import React from 'react';

import { CardSection, StyledCard, Wrapper } from '../../StyledWrappers';
import ButtonsDemo from '../ButtonDemo/ButtonsDemo';
import RadioButtonDemo from '../ButtonDemo/RadioButtonDemo';
import DeletePopConfirm from '../DeletePopconfirm';
import MenuDemo from '../MenuDemo';
import PaginationDemo from '../PaginationDemo';
import StepsDemo from '../StepsDemo';
import TableDemo from '../TableDemo';
import TabsDemo from '../TabsDemo';
import TimelineDemo from '../TimelineDemo';
import ToggleControlsDemo from '../ToggleDemo';

const MainCard: React.FC = () => {
  return (
    <StyledCard>
      <Wrapper>
        <Flex gap='middle'>
          <MenuDemo />
          <Flex vertical gap='middle' style={{ flex: 1, minWidth: 0 }}>
            <ButtonsDemo />
            <Flex>
              <ToggleControlsDemo />
            </Flex>
            <RadioButtonDemo />
            <TabsDemo />
            <CardSection>
              <PaginationDemo />
            </CardSection>
            <CardSection>
              <StepsDemo current={1} />
            </CardSection>
            <CardSection style={{ marginTop: 38 }}>
              <Flex gap={16} wrap justify='space-between'>
                <DeletePopConfirm />
                <TimelineDemo />
              </Flex>
            </CardSection>
          </Flex>
        </Flex>
      </Wrapper>
      <TableDemo />
    </StyledCard>
  );
};

export default MainCard;
