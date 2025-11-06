import { User01 } from '@untitledui/icons';
import { Avatar, Flex } from 'antd';

import { Text } from '@/components/Atoms';

type Props = {
  avatar?: string;
  name?: string;
  username?: string;
};

export default function InfoCard({ avatar, name, username }: Props) {
  if (!avatar && !name && !username) {
    return null;
  }
  return (
    <Flex gap={12} align='center'>
      <Avatar src={avatar} icon={<User01 />} alt={name ?? 'Person Avatar'} />
      <Flex vertical>
        <Text size='text-sm' weight='medium'>
          {name}
        </Text>
        <Text size='text-sm' color='textTertiary600'>
          {username}
        </Text>
      </Flex>
    </Flex>
  );
}
