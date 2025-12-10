import { Flex } from 'antd';

import { Text } from '@/components/Atoms';

type Props = {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
};

export const ModalTitle = ({ icon, title, subtitle }: Props) => {
  return (
    <Flex gap={16} align='center'>
      {icon}
      <Flex vertical gap={2}>
        <Text variant='text-md-semibold'>{title}</Text>
        {subtitle && (
          <Text variant='text-sm-regular' color='textTertiary600'>
            {subtitle}
          </Text>
        )}
      </Flex>
    </Flex>
  );
};
