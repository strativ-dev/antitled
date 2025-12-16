import { useLocation } from '@tanstack/react-router';
import { Layout, Menu } from 'antd';
import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { LAYOUT } from '@/lib/utils/constants';

import { StyledSimpleBar } from '@/components/Atoms';
import { useComponentsDrawerMenuItems } from '@/components/Layouts/ComponentsPageLayout/useComponentsDrawerMenuItems';

const ComponentsDrawer: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState<string>();

  const location = useLocation();

  const { componentsMenuItem, componentsMenuItemKeys } =
    useComponentsDrawerMenuItems();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCollapsed(true);
      }
    };

    handleResize();
  }, []);

  useEffect(() => {
    // get the page url and set the selected key
    const path = location.pathname;
    if (path === '/components') {
      setSelectedKey('component-overview-home');
      return;
    }
    const selectedKey = componentsMenuItemKeys.find((key: string) =>
      path.split('/').includes(key)
    );
    if (selectedKey) {
      setSelectedKey(selectedKey);
    }
  }, [location.pathname, componentsMenuItemKeys]);

  return (
    <StyledSider
      trigger={null}
      width={'19rem'}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      collapsedWidth={0}>
      <StyledSimpleBar
        autoHide
        style={{
          height: `calc(100dvh - ${LAYOUT.headerHeight})`,
          padding: '0 1rem',
          paddingBottom: '2rem',
        }}>
        {selectedKey && (
          <Menu
            mode='vertical'
            items={componentsMenuItem}
            defaultSelectedKeys={[selectedKey]}
            selectedKeys={[selectedKey]}
          />
        )}
      </StyledSimpleBar>
    </StyledSider>
  );
};

export default ComponentsDrawer;

const { Sider } = Layout;

const StyledSider = styled(Sider)`
  position: relative;
  z-index: 2;
  position: sticky;
  top: ${LAYOUT.headerHeight};
  height: calc(100dvh - ${LAYOUT.headerHeight});
  overflow: auto;
  scrollbar-color: scrollbarColor;
  scrollbar-width: thin;
  background-color: ${({ theme }) => theme.colors['backgrounds']['bgPrimary']};
  padding-inline: 0.5rem !important;

  .ant-menu-item-group-title {
    padding-inline-start: 0.875rem;
    margin-inline: ${({ theme }) => theme.spacing['lg']};
    font-size: ${({ theme }) => theme.fontSize['text-sm']};
    border-bottom: ${({ theme }) =>
      `1px solid ${theme.colors['borders']['borderSecondary']}`};
  }

  .ant-menu-item {
    /* padding-left: 1.5rem !important; */
    /* padding-right: 1.5rem !important; */
    font-weight: 400;

    span {
      font-size: 0.875rem;
    }
  }

  .ant-menu-item-selected {
  }
`;
