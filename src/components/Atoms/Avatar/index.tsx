import { Avatar as AntdAvatar } from 'antd';
import { Children, cloneElement, isValidElement } from 'react';

import { getSize, StatusDot } from './helpers';
import {
  BadgeContainer,
  StyledAvatarGroup,
  StyledAvatarWrapper,
} from './styles';
import { GroupProps, Props } from './types';

const AvatarRoot = ({
  size,
  statusIcon,
  status,
  children,
  ...props
}: Props) => {
  return (
    <StyledAvatarWrapper>
      <AntdAvatar size={getSize(size)} {...props}>
        {children}
      </AntdAvatar>
      {statusIcon && <BadgeContainer>{statusIcon}</BadgeContainer>}
      {!statusIcon && status && (
        <BadgeContainer $bordered>
          <StatusDot status={status} size={getSize(size) / 3} />
        </BadgeContainer>
      )}
    </StyledAvatarWrapper>
  );
};

const AvatarGroup = ({ size, children, ...props }: GroupProps) => {
  const avatarSize = getSize(size);

  // Clone children and pass the size prop to each Avatar
  const childrenWithSize = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { size } as any);
    }
    return child;
  });

  return (
    <StyledAvatarGroup size={avatarSize} {...props}>
      {childrenWithSize}
    </StyledAvatarGroup>
  );
};

export const Avatar = Object.assign(AvatarRoot, {
  Group: AvatarGroup,
});

export type { AvatarSize, AvatarStatus } from './types';
