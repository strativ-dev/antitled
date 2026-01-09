import { User01 } from '@untitledui/icons';
import { Flex } from 'antd';
import styled from 'styled-components';

import { Avatar, AvatarSize, AvatarStatus, Text } from '@/components/Atoms';

type Props = {
  avatar?: string;
  label?: string;
  subtext?: string;
  statusIcon?: React.ReactNode;
  size?: AvatarSize;
  status?: AvatarStatus;
};

const getFontSizes = (size?: AvatarSize) => {
  switch (size) {
    case 'xs':
    case 'sm':
      return { title: 'text-sm-medium', subtitle: 'text-xs-regular' } as const;
    case 'md':
      return { title: 'text-sm-medium', subtitle: 'text-sm-regular' } as const;
    case 'lg':
      return { title: 'text-md-medium', subtitle: 'text-md-regular' } as const;
    case 'xl':
    case '2xl':
      return { title: 'text-lg-medium', subtitle: 'text-md-regular' } as const;
    default:
      return { title: 'text-sm-medium', subtitle: 'text-sm-regular' } as const;
  }
};

const getGap = (size?: AvatarSize) => {
  switch (size) {
    case 'xs':
    case 'sm':
    case 'md':
      return 8;
    case 'lg':
      return 12;
    case 'xl':
    case '2xl':
      return 16;
    default:
      return 8;
  }
};

export const AvatarLabelGroup = ({
  avatar,
  label,
  subtext,
  statusIcon,
  size,
  status,
}: Props) => {
  if (!avatar && !label && !subtext) {
    return null;
  }

  return (
    <Flex gap={getGap(size)} align='center'>
      <Avatar
        size={size}
        src={avatar}
        icon={<UserIcon />}
        alt={label ?? 'Person Avatar'}
        statusIcon={statusIcon}
        status={status}
      />
      <Flex vertical>
        <Text variant={getFontSizes(size).title}>{label}</Text>
        <Text variant={getFontSizes(size).subtitle} color='textTertiary600'>
          {subtext}
        </Text>
      </Flex>
    </Flex>
  );
};

const UserIcon = styled(User01)`
  width: 80%;
  max-width: 2rem;
`;
