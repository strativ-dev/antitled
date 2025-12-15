import styled from 'styled-components';

import BrandLogo from '@/assets/logo.svg?react';
import { LAYOUT } from '@/lib/utils/constants';

type Props = {
  isCollapsed?: boolean;
};

export default function SiderLogo({ isCollapsed }: Props) {
  // const { mode } = useTheme();
  // const ThemedLogo =
  //   mode === 'dark' ? StrativLogoWithTextDark : StrativLogoWithText;

  // if (!isCollapsed) {
  //   return (
  //     <LogoContainer>
  //       <ThemedLogo height={40} />
  //     </LogoContainer>
  //   );
  // }

  return (
    <LogoContainer>
      <BrandLogo height={30} width={30} />
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${LAYOUT.headerHeight};
  border-bottom: 1px solid
    ${({ theme }) => theme.colors.borders['borderSecondaryAlt']};
`;
