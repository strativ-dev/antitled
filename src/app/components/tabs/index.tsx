import { Home01, Settings01, User01 } from '@untitledui/icons';
import { Flex } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';

import { Text, Tabs } from '@/components/Atoms';
import type { TabItem } from '@/components/Atoms';
import ComponentPageTitle from '@/components/Molecules/ComponentPageTitle';

const basicItems: TabItem[] = [
  {
    key: '1',
    label: 'My details',
    content: (
      <div style={{ padding: '16px 0' }}>
        <Text>My details content goes here</Text>
      </div>
    ),
  },
  {
    key: '2',
    label: 'Profile',
    content: (
      <div style={{ padding: '16px 0' }}>
        <Text>Profile content goes here</Text>
      </div>
    ),
  },
  {
    key: '3',
    label: 'Password',
    content: (
      <div style={{ padding: '16px 0' }}>
        <Text>Password content goes here</Text>
      </div>
    ),
  },
  {
    key: '4',
    label: 'Team',
    content: (
      <div style={{ padding: '16px 0' }}>
        <Text>Team content goes here</Text>
      </div>
    ),
  },
  {
    key: '5',
    label: 'Plan',
    content: (
      <div style={{ padding: '16px 0' }}>
        <Text>Plan content goes here</Text>
      </div>
    ),
  },
];

const itemsWithIcons: TabItem[] = [
  {
    key: 'home',
    label: 'Home',
    icon: <Home01 size={20} />,
    content: (
      <div style={{ padding: '16px 0' }}>
        <Text>Home content with icon</Text>
      </div>
    ),
  },
  {
    key: 'profile',
    label: 'Profile',
    icon: <User01 size={20} />,
    content: (
      <div style={{ padding: '16px 0' }}>
        <Text>Profile content with icon</Text>
      </div>
    ),
  },
  {
    key: 'settings',
    label: 'Settings',
    icon: <Settings01 size={20} />,
    content: (
      <div style={{ padding: '16px 0' }}>
        <Text>Settings content with icon</Text>
      </div>
    ),
  },
];

const verticalItems: TabItem[] = [
  { key: '1', label: 'My details', content: <Text>My details content</Text> },
  { key: '2', label: 'Profile', content: <Text>Profile content</Text> },
  { key: '3', label: 'Password', content: <Text>Password content</Text> },
  { key: '4', label: 'Team', content: <Text>Team content</Text> },
  { key: '5', label: 'Plan', content: <Text>Plan content</Text> },
  { key: '6', label: 'Billing', content: <Text>Billing content</Text> },
  { key: '7', label: 'Email', content: <Text>Email content</Text> },
  {
    key: '8',
    label: 'Notifications',
    content: <Text>Notifications content</Text>,
  },
  {
    key: '9',
    label: 'Integrations',
    content: <Text>Integrations content</Text>,
  },
  { key: '10', label: 'API', content: <Text>API content</Text> },
];

export default function TabsPage() {
  const [activeKey, setActiveKey] = useState('1');

  const onChange = (key: string) => {
    console.log('Tab changed to:', key);
    setActiveKey(key);
  };

  return (
    <>
      <ComponentPageTitle title='Tabs Component' />
      <Flex vertical gap={48}>
        {/* Horizontal Tabs - Button Brand Variant */}
        <TabsWrapper>
          <Text size='text-lg' weight='semibold' as='h2' margin='0 0 24px 0'>
            Horizontal Tabs - Button Brand
          </Text>
          <Tabs
            items={basicItems}
            defaultActiveKey='1'
            onChange={onChange}
            variant='button-brand'
            size='sm'
          />
        </TabsWrapper>

        {/* Horizontal Tabs - Button Gray */}
        <TabsWrapper>
          <Text size='text-lg' weight='semibold' as='h2' margin='0 0 24px 0'>
            Horizontal Tabs - Button Gray
          </Text>
          <Tabs
            items={itemsWithIcons}
            defaultActiveKey='home'
            onChange={onChange}
            variant='button-gray'
            size='sm'
          />
        </TabsWrapper>

        {/* Horizontal Tabs - Underlined */}
        <TabsWrapper>
          <Text size='text-lg' weight='semibold' as='h2' margin='0 0 24px 0'>
            Horizontal Tabs - Underline (Default)
          </Text>
          <Tabs
            items={basicItems.slice(0, 3)}
            defaultActiveKey='1'
            onChange={onChange}
            variant='underline'
            size='sm'
            orientation='vertical'
          />
        </TabsWrapper>

        {/* Horizontal Tabs - Button Bordered */}
        <TabsWrapper>
          <Text size='text-lg' weight='semibold' as='h2' margin='0 0 24px 0'>
            Horizontal Tabs - Button Bordered
          </Text>
          <Tabs
            items={basicItems.slice(0, 4)}
            defaultActiveKey='1'
            onChange={onChange}
            variant='button-bordered'
            size='sm'
          />
        </TabsWrapper>

        {/* Horizontal Tabs - Button Minimal */}
        <TabsWrapper>
          <Text size='text-lg' weight='semibold' as='h2' margin='0 0 24px 0'>
            Horizontal Tabs - Button Minimal
          </Text>
          <Tabs
            items={itemsWithIcons}
            defaultActiveKey='home'
            onChange={onChange}
            variant='button-minimal'
            size='sm'
          />
        </TabsWrapper>

        {/* Vertical Tabs */}
        <TabsWrapper>
          <Text size='text-lg' weight='semibold' as='h2' margin='0 0 24px 0'>
            Vertical Tabs - Button Gray
          </Text>
          <Tabs
            items={verticalItems}
            defaultActiveKey='1'
            onChange={onChange}
            orientation='vertical'
            variant='button-gray'
            size='sm'
          />
        </TabsWrapper>

        {/* Vertical Tabs - Button Bordered */}
        <TabsWrapper>
          <Text size='text-lg' weight='semibold' as='h2' margin='0 0 24px 0'>
            Vertical Tabs - Button Bordered
          </Text>
          <Tabs
            items={verticalItems.slice(0, 6)}
            defaultActiveKey='1'
            onChange={onChange}
            orientation='vertical'
            variant='button-bordered'
            size='sm'
          />
        </TabsWrapper>

        {/* Controlled Tabs Example */}
        <TabsWrapper>
          <Text size='text-lg' weight='semibold' as='h2' margin='0 0 24px 0'>
            Controlled Tabs (activeKey={activeKey})
          </Text>
          <Tabs
            items={basicItems.slice(0, 3)}
            activeKey={activeKey}
            onChange={setActiveKey}
            variant='button-brand'
            size='sm'
          />
        </TabsWrapper>
      </Flex>
    </>
  );
}

const TabsWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.borders.borderSecondary};
  padding: 1rem;
  border-radius: 10px;
`;
