import {
  AnnotationQuestion,
  Container,
  DotsVertical,
  Download01,
  FaceSmile,
  HomeLine,
  LayersTwo01,
  Lightning01,
  LogOut01,
  MessageSmileCircle,
  Settings01,
  Translate02,
  User01,
  UserPlus01,
  Users03,
} from '@untitledui/icons';
import { Flex, Space, type MenuProps } from 'antd';
import { t } from 'i18next';
import React, { useState } from 'react';

import {
  AvatarDropdownTrigger,
  IconWrapper,
  MenuLabel,
  StyledIcon,
  UserInfo,
} from '@/app/components/dropdown/styles';

import { Button, Dropdown } from '@/components/Atoms';
import ComponentPageTitle from '@/components/Common/ComponentPageTitle';

import AvatarIcon from '@/assets/images/avatar-icon.svg';

const items: MenuProps['items'] = [
  {
    key: 'user',
    label: (
      <UserInfo>
        <img src={AvatarIcon} alt='User avatar' />
        <Space orientation='vertical' size={2}>
          <span className='user-name'>Olivia Rhye</span>
          <span className='user-email'>olivia@untitledui.com</span>
        </Space>
      </UserInfo>
    ),
  },
  { type: 'divider' },
  {
    key: 'view-profile',
    icon: (
      <IconWrapper>
        <User01 />
      </IconWrapper>
    ),
    label: <MenuLabel>View profile</MenuLabel>,
    extra: '⌘K → P',
  },
  {
    key: 'settings',
    icon: (
      <IconWrapper>
        <Settings01 />
      </IconWrapper>
    ),
    label: <MenuLabel>Settings</MenuLabel>,
    extra: '⌘S',
  },
  {
    key: 'keyboard-shortcuts',
    icon: (
      <IconWrapper>
        <Lightning01 />
      </IconWrapper>
    ),
    label: <MenuLabel>Keyboard shortcuts</MenuLabel>,
    extra: '?',
  },
  { type: 'divider' },
  {
    key: 'company-profile',
    icon: (
      <IconWrapper>
        <HomeLine />
      </IconWrapper>
    ),
    label: <MenuLabel>Company profile</MenuLabel>,
    extra: '⌘ → C',
  },
  {
    key: 'team',
    icon: (
      <IconWrapper>
        <Users03 />
      </IconWrapper>
    ),
    label: <MenuLabel>Team</MenuLabel>,
    extra: '⌘K T',
  },
  {
    key: 'invite',
    icon: (
      <IconWrapper>
        <UserPlus01 />
      </IconWrapper>
    ),
    label: <MenuLabel>Invite colleagues</MenuLabel>,
  },
  { type: 'divider' },
  {
    key: 'changelog',
    icon: (
      <IconWrapper>
        <LayersTwo01 />
      </IconWrapper>
    ),
    label: <MenuLabel>Changelog</MenuLabel>,
  },
  {
    key: 'slack',
    icon: (
      <IconWrapper>
        <MessageSmileCircle />
      </IconWrapper>
    ),
    label: <MenuLabel>Slack Community</MenuLabel>,
  },
  {
    key: 'support',
    icon: (
      <IconWrapper>
        <AnnotationQuestion />
      </IconWrapper>
    ),
    label: <MenuLabel>Support</MenuLabel>,
  },
  {
    key: 'api',
    icon: (
      <IconWrapper>
        <Container />
      </IconWrapper>
    ),
    label: <MenuLabel>API</MenuLabel>,
  },
  { type: 'divider' },
  {
    key: 'language',
    icon: (
      <IconWrapper>
        <Translate02 />
      </IconWrapper>
    ),
    label: <MenuLabel>Language</MenuLabel>,
    extra: 'ENG',
  },
  { type: 'divider' },
  {
    key: 'signout',
    icon: (
      <IconWrapper>
        <LogOut01 />
      </IconWrapper>
    ),
    label: <MenuLabel>Sign out</MenuLabel>,
    extra: '⌥⇧Q',
  },
];

const items2: MenuProps['items'] = [
  { key: '1', label: <a href='https://www.antgroup.com'>1st menu item</a> },
  { key: '2', label: <a href='https://www.antgroup.com'>2nd menu item</a> },
  {
    key: '3',
    label: <a href='https://www.antgroup.com'>3rd menu item</a>,
  },
];

const items3: MenuProps['items'] = [
  { key: '1', label: <a href='https://www.antgroup.com'>1st menu item</a> },
  {
    key: '2',
    label: <a href='https://www.antgroup.com'>2nd menu item (disabled)</a>,
    icon: <FaceSmile />,
    disabled: true,
  },
  {
    key: '3',
    label: <a href='https://www.antgroup.com'>3rd menu item (disabled)</a>,
    disabled: true,
  },
  { key: '4', danger: true, label: 'a danger item' },
];
const items4: MenuProps['items'] = [
  {
    label: 'Submit and continue',
    key: '1',
  },
];
const Dropdowns: React.FC = () => {
  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    setLoadings((state) => {
      const newLoadings = [...state];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((state) => {
        const newLoadings = [...state];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 2000);
  };

  return (
    <Flex vertical gap='large'>
      <ComponentPageTitle title={t('common.Dropdown')} />
      <Space size={48} wrap>
        <Dropdown
          menu={{ items: items2 }}
          trigger={['click']}
          placement='bottomRight'>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Click me
              <Download01 />
            </Space>
          </a>
        </Dropdown>

        <Dropdown menu={{ items: items3 }} placement='bottomCenter'>
          <Button variant='secondary' size='md'>
            bottomCenter
          </Button>
        </Dropdown>

        <Dropdown menu={{ items }} placement='bottomRight'>
          <Button variant='secondary' size='md'>
            <Flex align='center' gap='4px'>
              bottomRight
              <StyledIcon />
            </Flex>
          </Button>
        </Dropdown>

        <Dropdown.Button menu={{ items }} placement='bottom' icon={<User01 />}>
          Dropdown
        </Dropdown.Button>

        <Dropdown.Button
          type='primary'
          loading={loadings[0]}
          menu={{ items: items4 }}
          onClick={() => enterLoading(0)}>
          Submit
        </Dropdown.Button>

        <Dropdown menu={{ items }} trigger={['click']} placement='bottomRight'>
          <AvatarDropdownTrigger src={AvatarIcon} alt='User avatar' />
        </Dropdown>
        <Dropdown menu={{ items }} trigger={['click']} placement='bottomRight'>
          <a onClick={(e) => e.preventDefault()}>
            <DotsVertical size={20} />
          </a>
        </Dropdown>
      </Space>
    </Flex>
  );
};

export default Dropdowns;
