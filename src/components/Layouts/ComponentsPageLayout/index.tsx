import { Link, Outlet } from '@tanstack/react-router';
import { Flex, Layout } from 'antd';
import styled from 'styled-components';

import { HEADER_HEIGHT } from '@/lib/utils/constants';

import ComponentsDrawer from '@/components/Layouts/ComponentsPageLayout/ComponentsDrawer';
import ThemeToggle from '@/components/Layouts/DashboardLayout/ThemeToggle';

import CompanyLogoImage from '@/assets/images/antitled-logo.svg';

const { Header, Content } = Layout;

export default function ComponentsPageLayout() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <StyledHeader>
        <div>
          <BrandLink to='/'>
            <BrandLogo
              width={64}
              height={48}
              src={CompanyLogoImage}
              alt='company logo'
            />
          </BrandLink>
        </div>
        <Flex gap='1rem' align='center'>
          <Link to='/components'>Components</Link>
          <ThemeToggle />
        </Flex>
      </StyledHeader>
      <Layout hasSider>
        <ComponentsDrawer />
        <StyledContent>
          <Outlet />
        </StyledContent>
      </Layout>
    </Layout>
  );
}

const StyledHeader = styled(Header)`
  position: fixed;
  z-index: 3;
  width: 100%;
  background: ${({ theme }) => theme.colors['backgrounds']['bgPrimary']};
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.shadows['xs']};

  height: ${HEADER_HEIGHT}px;
  line-height: ${HEADER_HEIGHT}px;
`;

const BrandLink = styled(Link)`
  cursor: pointer;
  object-fit: contain;
  margin: auto;
  display: flex;
  justify-content: center;
`;

const BrandLogo = styled.img`
  height: 5rem;
  cursor: pointer;
  object-fit: contain;
  margin: auto;
  aspect-ratio: 14 / 5;
`;

const StyledContent = styled(Content)`
  padding: ${HEADER_HEIGHT + 24}px 2rem;
  min-height: 280px;
  background: ${({ theme }) => theme.colors['backgrounds']['bgPrimary']};
`;
