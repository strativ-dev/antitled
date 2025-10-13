import React from 'react';

import { CardSection, StyledCard, Wrapper } from '../../StyledWrappers';
import ButtonsDemo from '../ButtonDemo/ButtonsDemo';
import RadioButtonDemo from '../ButtonDemo/RadioButtonDemo';
import DeletePopConfirm from '../DeletePopConfirm';
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
        <div>
          <MenuDemo />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <ButtonsDemo />
          <div style={{ marginTop: 18 }}>
            <ToggleControlsDemo />
          </div>
          <div style={{ marginTop: 18 }}>
            <RadioButtonDemo />
          </div>
          <div style={{ marginTop: 18 }}>
            <TabsDemo />
          </div>
          <CardSection>
            <PaginationDemo />
          </CardSection>
          <CardSection>
            <StepsDemo current={1} />
          </CardSection>
          <CardSection
            style={{
              display: 'flex',
              gap: 16,
              marginTop: 38,
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
            <DeletePopConfirm />
            <TimelineDemo />
          </CardSection>
        </div>
      </Wrapper>
      <TableDemo />
    </StyledCard>
  );
};

export default MainCard;
