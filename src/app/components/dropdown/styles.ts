import { ChevronDown } from '@untitledui/icons';
import { Flex } from 'antd';
import styled from 'styled-components';

export const MenuLabel = styled(Flex)`
  font-size: ${({ theme }) => theme.fontSize['text-md']};
  color: ${({ theme }) => theme.colors.texts.textSecondary700};
  align-items: center;
`;

export const IconWrapper = styled.div`
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    width: 1rem;
    height: 1rem;
    color: ${({ theme }) => theme.colors.foregrounds.fgQuaternary400};
  }
`;

export const UserInfo = styled(Flex)`
  align-items: center;
  gap: 0.5rem;

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }

  .user-name {
    font-weight: ${({ theme }) => theme.fontWeight['medium']};
    font-size: ${({ theme }) => theme.fontSize['text-sm']};
    color: ${({ theme }) => theme.colors.texts.textPrimary900};
  }

  .user-email {
    font-size: ${({ theme }) => theme.fontSize['text-sm']};
    color: ${({ theme }) => theme.colors.texts.textTertiary600};
  }
`;
export const AvatarDropdownTrigger = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  cursor: pointer;
`;
export const StyledIcon = styled(ChevronDown)`
  color: ${({ theme }) => theme.colors.foregrounds.fgQuaternary400};
  width: 1.5rem;
  height: 1.5rem;
`;
