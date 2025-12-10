import { Avatar as AntdAvatar } from 'antd';
import styled from 'styled-components';

import { getGroupAvatarTextSize } from './helpers';

export const StyledAvatarWrapper = styled.div`
  position: relative;

  .ant-avatar {
    border: none;
    position: relative;

    background: ${({ theme }) => theme.colors.backgrounds.bgTertiary};

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      box-shadow: inset 0 0 0 1.5px rgba(0, 0, 0, 0.08);
      pointer-events: none;
    }

    img {
      opacity: 0.95;
    }
  }
`;

export const StyledAvatarGroup = styled(AntdAvatar.Group)`
  .ant-avatar {
    border: none;
    position: relative;
    background: ${({ theme }) => theme.colors.backgrounds.bgTertiary};
    box-shadow: 0px 0px 0px 1.5px
      ${({ theme }) => theme.colors.backgrounds.bgPrimary};

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      box-shadow: inset 0 0 0 1.5px rgba(0, 0, 0, 0.08);
      pointer-events: none;
    }

    img {
      opacity: 0.95;
    }
  }

  .ant-avatar-string {
    font-size: ${({ theme, size }) =>
      theme.fontSize[getGroupAvatarTextSize(size as number)]};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.texts.textTertiary600};
  }
`;

export const BadgeContainer = styled.div<{ $bordered?: boolean }>`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(12%, 25%);
  width: fit-content;
  height: fit-content;
`;
