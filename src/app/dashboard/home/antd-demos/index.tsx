import React from 'react';

import { Column, ColumnsContainer, MainWrapper } from './StyledWrappers';
import ErrorCard from './component-demos/cards/ErrorCard';
import MainCard from './component-demos/cards/MainCard';
import SuccessCard from './component-demos/cards/SuccessCard';
import WarningCard from './component-demos/cards/WarningCard';

const AntDesignDemo: React.FC = () => {
  return (
    <MainWrapper>
      <ColumnsContainer>
        <Column>
          <MainCard />
          <SuccessCard />
        </Column>

        <Column>
          <ErrorCard />
          <WarningCard />
        </Column>
      </ColumnsContainer>
    </MainWrapper>
  );
};

export default AntDesignDemo;
