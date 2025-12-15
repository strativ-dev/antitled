import { Link } from '@tanstack/react-router';
import { Menu02, Menu03 } from '@untitledui/icons';
import { Flex, Layout } from 'antd';
import styled from 'styled-components';

import { LAYOUT } from '@/lib/utils/constants';

import { Button, LangPicker } from '@/components/Atoms';
import { HeaderUserNav } from '@/components/Layouts/DashboardLayout/HeaderUserNav';
import ThemeToggle from '@/components/Layouts/DashboardLayout/ThemeToggle';

type Props = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};
export default function Header({ collapsed, setCollapsed }: Props) {
  return (
    <StyledHeader>
      <Button
        variant='tertiary'
        color='default'
        icon={
          collapsed ? (
            <Menu02 style={{ fontSize: '1.25rem' }} />
          ) : (
            <Menu03 style={{ fontSize: '1.25rem' }} />
          )
        }
        onClick={() => setCollapsed(!collapsed)}
      />
      <Flex
        align='center'
        justify='end'
        gap={16}
        style={{
          height: '100%',
        }}>
        <Link to='/components' style={{ height: '100%' }}>
          <Button variant='link' size='lg' color='primary'>
            Components
          </Button>
        </Link>
        <ThemeToggle />
        <LangPicker />
        <HeaderUserNav />
      </Flex>
    </StyledHeader>
  );
}

const StyledHeader = styled(Layout.Header)`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.colors.backgrounds['bgPrimary']};
  font-size: ${({ theme }) => theme.fontSize['text-md']};
  height: ${LAYOUT.headerHeight};
  line-height: ${LAYOUT.headerHeight};
  border-bottom: 1px solid
    ${({ theme }) => theme.colors.borders['borderSecondaryAlt']};
`;
