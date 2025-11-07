import { User01 } from '@untitledui/icons';
import { Flex } from 'antd';

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
      return { title: 'text-sm', subtitle: 'text-xs' } as const;
    case 'md':
      return { title: 'text-sm', subtitle: 'text-sm' } as const;
    case 'lg':
      return { title: 'text-md', subtitle: 'text-md' } as const;
    case 'xl':
    case '2xl':
      return { title: 'text-lg', subtitle: 'text-md' } as const;
    default:
      return { title: 'text-sm', subtitle: 'text-sm' } as const;
  }
};

export default function AvatarLabelGroup({
  avatar,
  label,
  subtext,
  statusIcon,
  size,
  status,
}: Props) {
  if (!avatar && !label && !subtext) {
    return null;
  }

  return (
    <Flex gap={12} align='center'>
      <Avatar
        size={size}
        src={avatar}
        icon={<User01 />}
        alt={label ?? 'Person Avatar'}
        statusIcon={statusIcon}
        status={status}
      />
      <Flex vertical>
        <Text size={getFontSizes(size).title} weight='medium'>
          {label}
        </Text>
        <Text size={getFontSizes(size).subtitle} color='textTertiary600'>
          {subtext}
        </Text>
      </Flex>
    </Flex>
  );
}
