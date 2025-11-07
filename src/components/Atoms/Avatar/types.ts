import { AvatarProps } from 'antd';
import { Avatar as AntdAvatar } from 'antd';
import { ComponentProps } from 'react';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number;
export type AvatarStatus = 'online' | 'offline' | 'busy' | 'away' | 'none';

export type Props = Omit<AvatarProps, 'size'> & {
  size?: AvatarSize;
  statusIcon?: React.ReactNode;
  status?: AvatarStatus;
};

export type GroupProps = Omit<
  ComponentProps<typeof AntdAvatar.Group>,
  'size'
> & {
  size?: AvatarSize;
};
