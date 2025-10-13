import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Link, Outlet, useLocation, useNavigate } from '@tanstack/react-router';
import { Flex, Layout, Menu, theme } from 'antd';
import { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import { HeaderUserNav } from './HeaderUserNav';
import MenuItems from './MenuItems';
import StrativLogo from '@/assets/logo.svg?react';

import { Button } from '@/components/Atoms';
import { LangPicker } from '@/components/Atoms/LangPicker';
import { withAuth } from '@/components/Hoc/withAuth';
import CompactModeToggle from '@/components/Layouts/DashboardLayout/CompactModeToggle';
import ThemeToggle from '@/components/Layouts/DashboardLayout/ThemeToggle';

const { Sider, Content } = Layout;

const DashboardLayout = withAuth(() => {
  const location = useLocation();
  const navigate = useNavigate();
  const noPaddingBgPaths = ['/dashboard/antd-demos'];
  const hasNoPaddingBg = noPaddingBgPaths.includes(location.pathname);

  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const selectedKeys = useMemo(() => {
    return [location.pathname.replace(/^\//, '')];
  }, [location.pathname]);

  const getOpenedKey = useCallback(() => {
    const paths = location.pathname.split('/');

    if (paths.length === 1) {
      return paths.shift();
    }

    return paths?.filter(Boolean).shift();
  }, [location.pathname]);

  const handleMenuClick = ({ keyPath }: { keyPath: string[] }) => {
    const updatedKeyPath = keyPath?.reverse().join('/');
    return navigate({ to: `/${updatedKeyPath}` });
  };

  const handleOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
  };

  useEffect(() => {
    setOpenKeys([getOpenedKey() ?? '']);
  }, [getOpenedKey]);

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ height: '100vh' }}>
        <Flex justify='center' align='center'>
          <StrativLogo height={40} width={40} />
        </Flex>
        <Menu
          theme='dark'
          mode='inline'
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          onClick={handleMenuClick}
          onOpenChange={handleOpenChange}
          items={MenuItems()}
        />
      </Sider>
      <StyledLayout>
        <StyledHeader>
          <Button
            variant='tertiary'
            color='default'
            icon={
              collapsed ? (
                <MenuUnfoldOutlined style={{ fontSize: '20px' }} />
              ) : (
                <MenuFoldOutlined style={{ fontSize: '20px' }} />
              )
            }
            onClick={() => setCollapsed(!collapsed)}
          />
          <Flex align='center' justify='end' gap={16}>
            <Link to='/components'>
              <Button variant='tertiary' size='lg' color='primary'>
                Components
              </Button>
            </Link>
            <CompactModeToggle />
            <ThemeToggle />
            <LangPicker />
            <HeaderUserNav />
          </Flex>
        </StyledHeader>
        <Content
          style={{
            margin: '24px 16px',
            padding: hasNoPaddingBg ? 0 : 24,
            background: hasNoPaddingBg ? 'transparent' : colorBgContainer,
            borderRadius: borderRadiusLG,
          }}>
          <Outlet />
        </Content>
      </StyledLayout>
    </Layout>
  );
});

export default DashboardLayout;

const StyledLayout = styled(Layout)`
  background-color: ${({ theme }) => theme.colors.backgrounds['bgPrimary']};
`;
export const StyledHeader = styled(Layout.Header)`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.backgrounds['bgSecondary']};
`;
