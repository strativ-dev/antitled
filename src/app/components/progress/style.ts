import { Flex } from 'antd';
import styled from 'styled-components';

export const SectionTitle = styled.h5`
  margin: 0px;
`;

export const SectionContainer = styled(Flex)`
  flex: 1;
  min-width: 250px;
  margin: 24px;
`;

export const ProgressContainer = styled(Flex)`
  gap: 24px;
  flex-wrap: wrap;
`;

export const CircleContainer = styled(Flex)`
  gap: 24px;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;
