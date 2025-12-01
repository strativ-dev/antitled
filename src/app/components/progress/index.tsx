import { Flex } from 'antd';
import { t } from 'i18next';

import {
  CircleContainer,
  ProgressContainer,
  SectionContainer,
  SectionTitle,
} from './style';

import { Progress } from '@/components/Atoms';
import ComponentPageTitle from '@/components/Common/ComponentPageTitle';

function ProgressBars() {
  return (
    <Flex vertical gap='large'>
      <ComponentPageTitle title={t('common.Progress')} />

      <ProgressContainer>
        <SectionContainer vertical gap={24}>
          <SectionTitle>Basic</SectionTitle>
          <Progress percent={0} showInfo={false} />
          <Progress percent={65} showInfo={false} />
        </SectionContainer>

        <SectionContainer vertical gap={24}>
          <SectionTitle>With Info</SectionTitle>
          <Progress percent={0} />
          <Progress percent={65} />
        </SectionContainer>

        <SectionContainer vertical gap={24}>
          <SectionTitle>Position Bottom</SectionTitle>
          <Progress percent={0} positionBottom />
          <Progress percent={65} positionBottom />
        </SectionContainer>
      </ProgressContainer>

      <ProgressContainer>
        <SectionContainer vertical>
          <SectionTitle>Tooltip Top</SectionTitle>
          <Progress percent={65} tooltip showInfo={false} />
        </SectionContainer>

        <SectionContainer vertical>
          <SectionTitle>Tooltip Bottom</SectionTitle>
          <Progress
            percent={65}
            tooltip
            showInfo={false}
            tooltipPlacement='bottom'
          />
        </SectionContainer>
      </ProgressContainer>

      <SectionContainer vertical>
        <SectionTitle>Progress Circle</SectionTitle>

        <CircleContainer>
          <Progress percent={40} size='xxs' type='circle' label='Users' />
          <Progress percent={40} size='xs' type='circle' label='Active users' />
          <Progress percent={40} size='sm' type='circle' label='Active users' />
          <Progress percent={40} size='md' type='circle' label='Active users' />
          <Progress percent={40} size='lg' type='circle' label='Active users' />
        </CircleContainer>
      </SectionContainer>

      <SectionContainer vertical>
        <SectionTitle>Progress Half Circle</SectionTitle>
        <CircleContainer>
          <Progress percent={40} size='xxs' type='half-circle' label='Users' />
          <Progress
            percent={40}
            size='xs'
            type='half-circle'
            label='Active users'
          />
          <Progress
            percent={40}
            size='sm'
            type='half-circle'
            label='Active users'
          />
          <Progress
            percent={40}
            size='md'
            type='half-circle'
            label='Active users'
          />
          <Progress
            percent={50}
            size='lg'
            type='half-circle'
            label='Active users'
          />
        </CircleContainer>
      </SectionContainer>
    </Flex>
  );
}

export default ProgressBars;
