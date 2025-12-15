import { Outlet, useLocation, useNavigate } from '@tanstack/react-router';
import { Layout, Menu } from 'antd';
import { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import MenuItems from './MenuItems';
import { LAYOUT } from '@/lib/utils/constants';

import { withAuth } from '@/components/Hoc/withAuth';
import Header from '@/components/Layouts/DashboardLayout/Header';
import SiderLogo from '@/components/Layouts/DashboardLayout/SiderLogo';

const { Sider, Content } = Layout;

const DashboardLayout = withAuth(() => {
  const location = useLocation();
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState<string[]>([]);

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

  useEffect(() => {
    setOpenKeys([getOpenedKey() ?? '']);
  }, [getOpenedKey]);

  const handleOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
  };

  return (
    <Layout>
      <StyledSider
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth={LAYOUT.siderCollapsedWidth}
        width={LAYOUT.siderWidth}>
        <SiderLogo isCollapsed={collapsed} />
        <StyledMenu
          mode='inline'
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          onClick={handleMenuClick}
          onOpenChange={handleOpenChange}
          items={MenuItems()}
        />
      </StyledSider>
      <StyledLayout>
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <StyledContent>
          <Outlet />
        </StyledContent>
      </StyledLayout>
    </Layout>
  );
});

export default DashboardLayout;

const StyledLayout = styled(Layout)`
  background-color: ${({ theme }) => theme.colors.backgrounds['bgSecondary']};
  height: 100%;
  min-height: 100dvh;
`;

const StyledContent = styled(Content)`
  padding: 1.25rem;
`;

const StyledSider = styled(Sider)`
  /* position: fixed; */
  /* z-index: 11; */
  /* left: 0; */
  /* top: 0; */
  height: 100dvh;
  overflow: auto;
  scrollbar-color: scrollbarColor;
  scrollbar-width: thin;
  background-color: ${({ theme }) =>
    theme?.colors?.backgrounds?.bgPrimary ?? 'none'};
  transition: all 0.2s ease-in-out;
  border-right: 1px solid
    ${({ theme }) => theme.colors.borders['borderSecondaryAlt']};
`;

const StyledMenu = styled(Menu)`
  margin-top: 1rem;
  border: none !important;

  .ant-menu-item-group-title {
    font-size: ${({ theme }) => theme.fontSize['text-sm']}px !important;
    font-weight: 400;
    padding-inline: 0;
  }

  .ant-menu-title-content {
    color: ${({ theme }) => theme.colors.texts.textPrimary900};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    font-size: ${({ theme }) => theme.fontSize['text-sm']}px !important;

    margin-left: 0.5rem !important;
  }

  .ant-menu-item {
    padding-left: 0.75rem !important;
    padding-right: 0.75rem !important;

    .ant-menu-item-icon {
      color: ${({ theme }) => theme.colors.foregrounds.fgQuaternary400};
      vertical-align: -0.25rem;
      text-align: center;
      margin-left: 0.3rem;
    }
    &.ant-menu-item-selected {
      .ant-menu-item-icon {
        color: ${({ theme }) => theme.colors.Brand[600]};
      }
    }
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
